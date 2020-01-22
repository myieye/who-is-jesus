import {
  Component, Input,
  Output, EventEmitter, ElementRef, ViewChild, HostListener, ChangeDetectionStrategy
} from '@angular/core';
import { VerseTag } from '../verses';
import { MatChip, MatChipList } from '@angular/material/chips';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  @Input() tags: VerseTag[];

  @Output() readonly selectedTagsChange = new EventEmitter<Array<VerseTag>>();

  @ViewChild(MatChipList, { static: true }) chipList: MatChipList;
  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;

  _isStuck: boolean;
  _multiple: boolean;

  private lastSelectedChip: MatChip;
  private cachedChipSelection: MatChip[];

  private get selectedChips(): MatChip[] {
    return this.chipList?.chips?.filter(chip => chip.selected) || [];
  }

  private get selectedTags(): VerseTag[] {
    return this.selectedChips.map(chip => chip.value);
  }

  chipClicked(chip: MatChip) {
    if (!chip.selected) {
      this.lastSelectedChip = chip;
    }

    chip.toggleSelected(true);
    this.cachedChipSelection = this.selectedChips;
    this.selectedTagsChange.emit(this.selectedTags);
  }

  @HostListener('window:scroll')
  onScroll() {
    this._isStuck = this.container.nativeElement.getBoundingClientRect().top === 0;
  }

  private reduceSelectionToFirst() {
    const chips = this.selectedChips;
    if (chips.length > 1) {
      chips
        .filter(chip => chip != this.lastSelectedChip)
        .forEach(chip => chip.deselect());
    }
    this.selectedTagsChange.emit(this.selectedTags);
  }
  
  private restoreCachedSelection() {
    this.cachedChipSelection?.forEach(chip => chip.select());
    this.selectedTagsChange.emit(this.selectedTags);
  }
}
