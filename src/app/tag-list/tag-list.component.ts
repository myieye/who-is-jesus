import {
  Component, Input,
  Output, EventEmitter, ElementRef, ViewChild, HostListener, ChangeDetectionStrategy, HostBinding, Renderer2, ChangeDetectorRef
} from '@angular/core';
import { MatChip, MatChipList } from '@angular/material/chips';
import { VerseTagKey, VerseTag } from '../models/tags';
import { isNil } from 'lodash';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: { showDelay: 0, hideDelay: 0, touchendHideDelay: 3000 }
    }
  ]
})
export class TagListComponent {

  @Input() set multiple(multiple: boolean) {
    if (this._multiple !== multiple) {
      this._multiple = multiple;
      if (!multiple) {
        this.reduceSelectionToFirst();
      } else {
        this.chipList.multiple = true;
        this.restoreCachedSelection();
      }
    }
  }

  @Input() tags: VerseTag[] = [];

  private _activeTags: VerseTagKey[];
  @Input()
  set activeTags(activeTags: VerseTagKey[]) {
    this._activeTags = activeTags || [];

    if (isNil(activeTags) || activeTags.length === 0 || activeTags.length === this.tags.length) {
      return;
    }

    this.chipList.chips.forEach((chip) => chip.disabled = this.isDisabled(chip.value));
  }
  get activeTags(): VerseTagKey[] {
    return this._activeTags;
  }

  @Output() readonly selectedTagsChange = new EventEmitter<Array<VerseTagKey>>();


  @ViewChild(MatChipList, { static: true }) chipList: MatChipList;
  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;

  @HostBinding('class.stuck')
  _isStuck = false;
  _isOpen = true;
  _multiple: boolean;
  @HostBinding('class.has-selected-tags') _hasSelectedTags: boolean;
  @HostBinding('class.sticky') _sticky: boolean;

  private lastSelectedChip: MatChip;
  private cachedChipSelection: MatChip[];

  private get selectedChips(): MatChip[] {
    return this.chipList?.chips?.filter(chip => chip.selected) || [];
  }

  private get selectedTags(): VerseTagKey[] {
    return this.selectedChips.map(chip => chip.value.key);
  }

  private get containerOffsetTop(): number {
    return this.container.nativeElement.offsetTop;
  }

  constructor(private readonly renderer: Renderer2, private readonly ref: ChangeDetectorRef) {
  }

  chipClicked(chip: MatChip) {
    if (!chip.selected) {
      this.lastSelectedChip = chip;
    }

    chip.toggleSelected(true);
    this.cachedChipSelection = this.selectedChips;
    this._hasSelectedTags = this.cachedChipSelection.length > 0;
    this.selectedTagsChange.emit(this.selectedTags);

    const wasStuck = this._isStuck;
    this.updateStickiness(this._hasSelectedTags);
    setTimeout(() => {
      if (!this._hasSelectedTags && wasStuck) {
        window.scrollTo({ top: this.containerOffsetTop, behavior: 'smooth' });
      }
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateStickiness();
  }

  isDisabled(tag: VerseTag): boolean {
    console.log(!(this.activeTags.length === 0 || this.activeTags.includes(tag.key)));
    return !(this.activeTags.length === 0 || this.activeTags.includes(tag.key));
  }

  private reduceSelectionToFirst() {
    const chips = this.selectedChips;
    if (chips.length > 1) {
      chips
        .filter(chip => chip !== this.lastSelectedChip)
        .forEach(chip => chip.deselect());
    }
    this.selectedTagsChange.emit(this.selectedTags);
  }

  private restoreCachedSelection() {
    this.cachedChipSelection?.forEach(chip => chip.select());
    this.selectedTagsChange.emit(this.selectedTags);
  }

  private updateStickiness(stickableIfAbove = false): void {
    const rect = this.container.nativeElement.getBoundingClientRect();
    const atTop = rect.top === 0 || (stickableIfAbove && rect.top < 0);
    this._sticky = this.hasSpaceToCollapse(rect.height) || this._isStuck;
    const newIsStuck = atTop && this._sticky && this._hasSelectedTags;

    if (newIsStuck !== this._isStuck) {
      this._isOpen = !newIsStuck;
    }

    this._isStuck = newIsStuck;
  }

  private hasSpaceToCollapse(height: number): boolean {
    const currScrollBottom = window.innerHeight + window.scrollY;
    const scrollHeight = window.document.body.scrollHeight;
    const remainingScroll = scrollHeight - currScrollBottom;
    return remainingScroll > height;
  }
}
