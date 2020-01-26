import { Component } from '@angular/core';
import { verses, VerseTag, offLimits } from './verses';
import { flatMap, union, difference, intersection, sortBy } from 'lodash';
import { VerseFilter } from './source-filter';
import { VerseIndexer } from './verse-order-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  verses = verses;
  tags: VerseTag[];

  private selectedTags: VerseTag[] = [];
  private verseFilters: VerseFilter[] = [];
  private verseIndexer: VerseIndexer;

  constructor() {
    this.tags = difference(union(flatMap(verses, v => v.tags)), offLimits).sort();
  }

  selectedTagsChanged(selectedTags: VerseTag[]) {
    this.selectedTags = selectedTags;
    this.refreshVerses();
  }

  sourceFilterChanged(filters: VerseFilter[]): void {
    this.verseFilters = filters;
    this.refreshVerses();
  }

  verseOrderChanged(indexer: VerseIndexer): void {
    console.log(1, indexer);
    this.verseIndexer = indexer;
    this.refreshVerses();
  }

  private refreshVerses(): void {
    this.verses = verses;

    if (this.selectedTags.length) {
      this.verses = this.verses.filter(verse => intersection(verse.tags, this.selectedTags).length);
    }

    if (this.verseFilters.length) {
      this.verses = this.verses.filter(verse => this.verseFilters.some(filter => filter(verse)));
    }

    if (this.verseIndexer) {
      console.log(2);
      this.verses = sortBy(this.verses, this.verseIndexer);
    }
  }
}
