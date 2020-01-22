import { Component } from '@angular/core';
import { verses, VerseTag, offLimits } from './verses';
import { flatMap, union, difference, intersection } from 'lodash';
import { SourceFilter, VerseFilter } from './source-filter/source-filters';
import { bibleBooks } from './bible-books.en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  verses = verses;
  tags: VerseTag[];
  sourceFilters: SourceFilter[] = [
    {
      displayName: 'Jesus',
      cssClass: 'jesus-words',
      filter: (verse) => verse.html.indexOf('jesus-words') > -1
    },
    SourceFilter.forBook(bibleBooks.Matt),
    SourceFilter.forBook(bibleBooks.Mark),
    SourceFilter.forBook(bibleBooks.Luke),
    SourceFilter.forBook(bibleBooks.John),
  ]

  private selectedTags: VerseTag[] = [];
  private verseFilters: VerseFilter[] = [];

  constructor() {
    this.tags = difference(union(flatMap(verses, v => v.tags)), offLimits).sort();
  }

  onSelectedTagsChanged(selectedTags: VerseTag[]) {
    this.selectedTags = selectedTags;
    this.refreshVerses();
  }

  sourceFilterChanged(filters: VerseFilter[]): void {
    this.verseFilters = filters;
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
  }
}
