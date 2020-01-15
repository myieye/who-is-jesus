import { Component } from '@angular/core';
import { verses, VerseTag, offLimits } from './verses';
import { flatMap, union, difference, intersection } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  verses = verses;
  tags: VerseTag[];

  constructor() {
    this.tags = difference(union(flatMap(verses, v => v.tags)), offLimits).sort();
  }

  onSelectedTagsChanged(selectedTags: VerseTag[]) {
    if (selectedTags.length) {
      this.verses = verses.filter(verse => intersection(verse.tags, selectedTags).length);
    } else {
      this.verses = verses;
    }
  }
}
