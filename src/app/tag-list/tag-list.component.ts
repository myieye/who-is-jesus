import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  HostListener,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { MatChip, MatChipList } from '@angular/material/chips';
import { VerseTagKey, VerseTag } from '../models/tags';
import { isNil } from 'lodash';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { QueryParamService } from '../services/query-param.service';
import { ScreenSizeService } from '../services/screen-size.service';

const TAG_PARAM = 'tags';
const COLLAPSED_TAG_LIST_HEIGHT = 50;

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: { showDelay: 500, hideDelay: 0, touchendHideDelay: 3000 }
    }
  ]
})
export class TagListComponent implements AfterViewInit {

  @Input() set multiple(multiple: boolean) {
    if (this._multiple !== multiple) {
      this._multiple = multiple;
      if (!multiple) {
        this.reduceSelectionToLastSelected();
      } else {
        this.chipList.multiple = this.stickyChipList.multiple = true;
        this.restoreCachedSelection();
      }
    }
  }

  @Input()
  tags: VerseTag[] = [];

  @Input()
  set activeTags(activeTags: VerseTagKey[]) {
    this._activeTags = activeTags || [];

    if (isNil(this.chipList) || isNil(this.chipList.chips)) {
      return;
    }

    this.updateChipStates();
  }
  get activeTags(): VerseTagKey[] {
    return this._activeTags;
  }

  @Output() readonly selectedTagsChange = new EventEmitter<Array<VerseTagKey>>();

  @ViewChild('chipList', { static: true }) chipList: MatChipList;
  @ViewChild('stickyChipList', { static: true }) stickyChipList: MatChipList;
  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;

  collapsed = !this.screenSizeService.isVeryBigScreen;
  stickyListVisible: boolean;
  _multiple: boolean;
  private _activeTags: VerseTagKey[];
  private lastSelectedChip: MatChip;
  private cachedChipSelection: MatChip[];
  private allChips: MatChip[];

  private get selectedChips(): MatChip[] {
    return this.chipList?.chips?.filter(chip => chip.selected) || [];
  }

  private get selectedTags(): VerseTagKey[] {
    return this.selectedChips.map(chip => chip.value.key);
  }

  constructor(
    private readonly paramService: QueryParamService,
    private readonly screenSizeService: ScreenSizeService,
  ) {
  }

  ngAfterViewInit(): void {
    this.allChips = [...this.chipList.chips.toArray(), ...this.stickyChipList.chips.toArray()];

    this.paramService.loadParams(TAG_PARAM, tags => {
      this.allChips
        .filter(chip => tags.includes(chip.value.key))
        .forEach(chip => chip.select());
      this.cachedChipSelection = this.selectedChips;
      this.selectedTagsChanged(false);
    });

    this.updateChipStates();
  }

  chipClicked(chip: MatChip) {
    if (!chip.selected) {
      this.lastSelectedChip = chip;
    }

    this.chipList.chips.find((c) => c.value === chip.value).toggleSelected(true);
    this.stickyChipList.chips.find((c) => c.value === chip.value).toggleSelected(true);

    this.cachedChipSelection = this.selectedChips;
    const hasSelectedTags = this.cachedChipSelection.length > 0;
    this.selectedTagsChanged();

    const wasVisible = this.stickyListVisible;
    this.updateStickyList();
    setTimeout(() => {
      if (!hasSelectedTags && wasVisible) {
        window.scrollTo({ top: this.container.nativeElement.offsetTop, behavior: 'smooth' });
      }
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateStickyList();
  }

  private updateStickyList(): void {
    const rect = this.container.nativeElement.getBoundingClientRect();
    if (this.screenSizeService.isVeryBigScreen) {
      this.stickyListVisible = rect.top <= 0 && (this.cachedChipSelection?.length ?? 0) > 0;
    } else {
      const hasSelectedTags = this.selectedChips.length > 0;
      this.stickyListVisible = hasSelectedTags && rect.bottom <= COLLAPSED_TAG_LIST_HEIGHT;
    }

    this.collapsed = !this.screenSizeService.isVeryBigScreen;
  }

  private updateChipStates(): void {
    this.allChips.forEach((chip) => chip.disabled = this.isDisabled(chip.value));
  }

  private isDisabled(tag: VerseTag): boolean {
    return !(this.activeTags.length === 0 || this.activeTags.includes(tag.key));
  }

  private reduceSelectionToLastSelected() {
    const chips = this.selectedChips;
    if (chips.length > 1) {
      chips
        .filter(chip => chip !== this.lastSelectedChip)
        .forEach(chip => chip.deselect());
    }
    this.selectedTagsChanged();
  }

  private restoreCachedSelection() {
    if (!isNil(this.cachedChipSelection) && this.cachedChipSelection.length) {
      this.cachedChipSelection?.forEach(chip => chip.select());
      this.selectedTagsChanged();
    }
  }

  private selectedTagsChanged(saveToUrl = true): void {
    const selectedTags = this.selectedTags;
    this.selectedTagsChange.emit(selectedTags);

    this.paramService.saveParam(TAG_PARAM, selectedTags, saveToUrl);
  }
}
