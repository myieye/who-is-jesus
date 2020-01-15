import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VerseTag, suggestedTags } from '../../verses';
import { includes } from 'lodash';

export interface TagSelectionEvent {
  selected: boolean;
  tag: VerseTag;
}

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tag: VerseTag;
  @Output() readonly selectionChange = new EventEmitter<TagSelectionEvent>();

  selected = false;
  bold: boolean;

  constructor() { }

  ngOnInit() {
    this.bold = includes(suggestedTags, this.tag);
  }

  toggle() {
    this.selected = !this.selected;
    this.selectionChange.emit({ selected: this.selected, tag: this.tag });
  }

}
