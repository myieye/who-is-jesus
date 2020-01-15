import { Component, Input, ViewChildren, QueryList,
  Output, EventEmitter, ElementRef, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { VerseTag } from '../../verses';
import { TagSelectionEvent, TagComponent } from '../tag/tag.component';
import { isNil } from 'lodash';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {

  @Input() tags: VerseTag[];
  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;
  @ViewChildren(TagComponent) tagComponents: QueryList<TagComponent>;
  @Output() selectedTagsChange = new EventEmitter<Array<VerseTag>>();

  private selectedTag?: VerseTag;

  constructor(private readonly ref: ChangeDetectorRef) {

  }

  onTagSelected(event: TagSelectionEvent) {
    if (event.selected) {
      this.selectedTag = event.tag;
      this.tagComponents.forEach(tag => {
        if (tag.tag !== this.selectedTag) {
          tag.selected = false;
        }
      });
    } else {
      this.selectedTag = undefined;
    }

    this.selectedTagsChange.emit(isNil(this.selectedTag) ? [] : [this.selectedTag]);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.ref.markForCheck();
  }

  isStuck(): boolean {
    return this.container.nativeElement.getBoundingClientRect().top === 0;
  }
}
