import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { VerseTag } from '../models/tags';
import { isNil } from 'lodash';

@Component({
  selector: 'app-tagged-verse-group-header',
  templateUrl: './tagged-verse-group-header.component.html',
  styleUrls: ['./tagged-verse-group-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaggedVerseGroupHeaderComponent {

  @Input() tags: VerseTag | VerseTag[];

  get _tags(): VerseTag[] {
    return isNil(this.tags) ? []
      : Array.isArray(this.tags) ? this.tags
        : [this.tags];
  }
}
