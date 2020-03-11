import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  readonly options = OptionKey;

  verses: TaggedVerse[];
  verseGroups: { tag: VerseTag, verses: TaggedVerse[] }[];
  tags: VerseTag[];
  activeTags: VerseTagKey[];
  optionsSelection: OptionsSelection = {};

  private selectedTags: VerseTagKey[] = [];
  private verseFilters: SourceFilterChangeEvent = { filters: [], all: true };
  private verseIndexer: VerseIndexer;

  get groupByTag(): boolean {
    return this.optionsSelection.GroupByTag && this.selectedTags.length > 0;
  }

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
      if (this.groupByTag) {
        // Instead of sorting each group just do a full refresh
        this.refreshVerses();
      } else {
        // Slightly more performant than a full refresh
        this.sortVerses();
      }
    }
  }

  selectedOptionsChanged(optionsSelection: OptionsSelection): void {
    this.optionsSelection = optionsSelection;
    this.refreshVerses();
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

    if (this.groupByTag) {
      this.verseGroups = this.selectedTags.map((tag) => ({
        tag: this.content.tags[tag],
        verses: this.verses.filter((verse) => verse.tags.includes(tag)),
      }));
    }

    this.ref.markForCheck();
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
      console.log('sorting');
      this.verses = sortBy(this.verses, this.verseIndexer);
      this.ref.markForCheck();
    }
  }
}
