import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { flatMap, union, difference, intersection, sortBy, isNil } from 'lodash';
import { SourceFilterChangeEvent } from './source-filter';
import { VerseIndexer } from './verse-order-select';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { VerseTag, offLimits, VerseTagKey } from './models/tags';
import { TaggedVerse } from './models/bible';
import { ContentService } from './services/content.service';
import { OptionsSelection, OptionKey } from './options-list/options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  readonly options = OptionKey;

  verses: TaggedVerse[];
  tags: VerseTag[];
  activeTags: VerseTagKey[];
  optionsSelection: OptionsSelection = {};

  private selectedTags: VerseTagKey[] = [];
  private verseFilters: SourceFilterChangeEvent = { filters: [], all: true };
  private verseIndexer: VerseIndexer;

  constructor(
    readonly content: ContentService,
    private readonly dialog: MatDialog,
    private readonly ref: ChangeDetectorRef,
  ) {
    this.verses = this.content.verses;
  }

  ngOnInit(): void {
    this.tags = this.getVerseTagSet(this.content.verses);
  }

  selectedTagsChanged(selectedTags: VerseTagKey[]) {
    this.selectedTags = selectedTags;
    this.refreshVerses();
  }

  sourceFilterChanged(filtersChange: SourceFilterChangeEvent): void {
    this.verseFilters = filtersChange;
    this.refreshVerses();
  }

  verseOrderChanged(indexer: VerseIndexer): void {
    if (this.verseIndexer !== indexer) {
      this.verseIndexer = indexer;
      this.sortVerses();
    }
  }

  selectedOptionsChanged(optionsSelection: OptionsSelection): void {
    this.optionsSelection = optionsSelection;
  }

  private refreshVerses(): void {
    this.verses = this.content.verses;

    if (!this.verseFilters.all) {
      this.verses = this.verses.filter(verse => this.verseFilters.filters.some(filter => filter(verse)));
    }

    this.activeTags = this.getVerseTagKeySet(this.verses);

    if (this.selectedTags.length) {
      this.verses = this.verses.filter(verse => intersection(verse.tags, this.selectedTags).length);
    }

    this.sortVerses();

    this.ref.detectChanges();
  }

  infoClicked(): void {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      data: this.content,
    });
  }

  getVerseTagSet(verses: TaggedVerse[]): VerseTag[] {
    const tags = this.getVerseTagKeySet(verses)
      .map((tagKey) => this.content.tags[tagKey]);

    return sortBy(tags, (tag) => tag.name);
  }

  getVerseTagKeySet(verses: TaggedVerse[]): VerseTagKey[] {
    return difference(union(flatMap(verses, v => v.tags)), offLimits);
  }

  private sortVerses(): void {
    if (this.verseIndexer) {
      this.verses = sortBy(this.verses, this.verseIndexer);
    }
  }
}
