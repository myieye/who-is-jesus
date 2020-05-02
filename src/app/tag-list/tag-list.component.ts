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
import { isNil, first } from 'lodash';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { QueryParamService } from '../services/query-param.service';
import { ScreenSizeService } from '../services/screen-size.service';

const TAG_PARAM = 'tags';

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

  @Input()
  set multiple(multiple: boolean) {
    if (this._multiple !== multiple) {
      this._multiple = multiple;
      if (!multiple) {
        this.reduceSelectionToLastSelected();
      } else {
        this.restoreCachedSelection();
      }
    }
  }
  get multiple(): boolean {
    return this._multiple;
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
  @ViewChild('stickyContainer', { static: true, read: ElementRef }) stickyContainer: ElementRef<HTMLElement>;

  collapsed = !this.screenSizeService.isVeryBigScreen;
  stickyListVisible: boolean;
  private _multiple: boolean;
  private _activeTags: VerseTagKey[];
  private lastSelectedChip: MatChip;
  private cachedSelectedChips: MatChip[];
  private allChips: MatChip[];

  private get selectedChips(): MatChip[] {
    return this.chipList?.chips?.filter(chip => chip.selected) || [];
  }

  private get selectedTags(): VerseTagKey[] {
    return this.selectedChips.map(chip => chip.value.key);
  }

  private get hasSelectedTags(): boolean {
    return this.selectedChips.length > 0;
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
      this.selectedTagsChanged(false);
    });

    this.cacheSelectedChips();
    this.lastSelectedChip = first(this.cachedSelectedChips);
    this.updateChipStates();
  }

  chipClicked(clickedChip: MatChip) {
    if (!clickedChip.selected) {
      this.lastSelectedChip = clickedChip;
    }

    this.allChips.forEach((chip) => {
      if (chip.value === clickedChip.value) {
        chip.toggleSelected(true);
      } else if (!this.multiple) {
        chip.deselect();
      }
    });

    this.cacheSelectedChips();
    this.selectedTagsChanged();

    const wasVisible = this.stickyListVisible;
    this.updateStickyList();
    setTimeout(() => {
      if (!this.hasSelectedTags && wasVisible) {
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
    const stickyListHeight = this.stickyContainer.nativeElement.clientHeight;

    this.stickyListVisible = this.hasSelectedTags && rect.bottom <= stickyListHeight;
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
    if (this.cachedSelectedChips?.length) {
      this.cachedSelectedChips?.forEach(chip => chip.select());
      this.selectedTagsChanged();
    }
  }

  private selectedTagsChanged(saveToUrl = true): void {
    const selectedTags = this.selectedTags;
    this.selectedTagsChange.emit(selectedTags);

    this.paramService.saveParam(TAG_PARAM, selectedTags, saveToUrl);
  }

  private cacheSelectedChips(): void {
    this.cachedSelectedChips = this.selectedChips;
  }
}
