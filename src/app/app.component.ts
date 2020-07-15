import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { flatMap, union, difference, intersection, sortBy, isNil, groupBy } from 'lodash';
import { SourceFilterChangeEvent } from './source-filter';
import { VerseIndexer } from './verse-order-select';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';
import { VerseTag, offLimits, VerseTagKey } from './models/tags';
import { TaggedVerse, TaggedVerseCollection, TaggedVerseCollectionItem } from './models/bible';
import { ContentService } from './services/content.service';
import { OptionsSelection, OptionKey } from './options-list/options';
import { VERSE_SEPARATOR } from '../utils/constants';
import { hideInstructions } from '../utils/hider-util';
import { ModalController, MenuController } from '@ionic/angular';
import { LanguageService } from './services/language.service';
import { PlatformService } from './services/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('tagInstructions')
  set tagInstructions(tagInstructions: ElementRef<HTMLElement>) {
    //setTimeout(() => hideInstructions(tagInstructions.nativeElement), 2000);
  }

  @ViewChild('optionInstructions')
  set optionInstructions(optionInstructions: ElementRef<HTMLElement>) {
    //setTimeout(() => hideInstructions(optionInstructions.nativeElement), 4000);
  }

  readonly options = OptionKey;

  verses: TaggedVerseCollection;
  verseGroups: { tag: VerseTag, verses: TaggedVerseCollection }[];
  tags: VerseTag[];
  activeTags: VerseTagKey[];
  optionsSelection: OptionsSelection = {};
  selectedTags: VerseTag[] = [];

  readonly menus = {
    main: 'main',
    language: 'language',
  };

  private selectedTagKeys: VerseTagKey[] = [];
  private verseFilters: SourceFilterChangeEvent = { filters: [], all: true };
  private verseIndexer: VerseIndexer;

  get groupByTag(): boolean {
    return this.optionsSelection.GroupByTag && this.selectedTagKeys.length > 0;
  }

  constructor(
    readonly content: ContentService,
    private readonly ref: ChangeDetectorRef,
    readonly languageService: LanguageService,
    readonly platform: PlatformService,
    private readonly modalController: ModalController,
    private readonly menuController: MenuController,
  ) {
    this.verses = this.content.verses;
  }

  ngOnInit(): void {
    this.tags = this.getVerseTagSet(this.content.verses);
  }

  ngAfterViewInit(): void {
    this.menuController.enable(true, this.menus.main);
  }

  selectedTagsChanged(selectedTagKeys: VerseTagKey[]) {
    this.selectedTagKeys = selectedTagKeys;
    this.selectedTags = selectedTagKeys.map((tagKey) => this.content.tags[tagKey]);
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
    const sourceFilteredVerses = this.verseFilters.all ? this.content.verses
      : this.content.verses.filter((verse) => this.verseFilters.filters.some(filter => filter(verse)));
    let tagAndSourceFilteredVerses: TaggedVerse[] = [];

    this.activeTags = this.getVerseTagKeySet(sourceFilteredVerses);
    const includeAllTags = !this.selectedTagKeys.length;

    this.verses = this.filterVersesAndMergeParallels(sourceFilteredVerses, (verse) => {
      const include = includeAllTags || intersection(verse.tags, this.selectedTagKeys).length > 0;
      if (include) {
        tagAndSourceFilteredVerses.push(verse);
      }
      return include;
    });

    if (!this.groupByTag) {
      this.sortVerses();
    } else {
      tagAndSourceFilteredVerses = this.sortVerses(tagAndSourceFilteredVerses) as TaggedVerse[];
      this.verseGroups = this.selectedTagKeys.map((tag) => {
        return {
          tag: this.content.tags[tag],
          verses: this.filterVersesAndMergeParallels(tagAndSourceFilteredVerses, (verse) => verse.tags.includes(tag)),
        };
      });
    }

    this.ref.markForCheck();
  }

  async infoClicked(): Promise<void> {
    const modal = await this.modalController.create({
      component: InfoDialogComponent,
      componentProps: {
        content: this.content,
      },
      swipeToClose: true,
    });

    return await modal.present();
  }

  openMenu(menuId: string): void {
    this.menuController.enable(true, menuId);
    this.menuController.open(menuId);
  }

  getVerseTagSet(verses: TaggedVerse[]): VerseTag[] {
    const tags = this.getVerseTagKeySet(verses)
      .map((tagKey) => this.content.tags[tagKey]);

    return sortBy(tags, (tag) => tag.name);
  }

  getVerseTagKeySet(verses: TaggedVerse[]): VerseTagKey[] {
    return difference(union(flatMap(verses, v => v.tags)), offLimits);
  }

  private sortVerses(verses?: TaggedVerseCollection): TaggedVerseCollection {
    const unsortedVerses = verses ?? this.verses;

    if (isNil(this.verseIndexer)) {
      return unsortedVerses;
    }

    const sortedVerses = sortBy(unsortedVerses, (verse) =>
    this.verseIndexer(this.mapVerseCollectionItemToVerse(verse)));
    if (isNil(verses)) {
      this.verses = sortedVerses;
    }

    return sortedVerses;
  }

  private filterVersesAndMergeParallels(verses: TaggedVerse[], filter: (verse: TaggedVerse) => boolean): TaggedVerseCollection {
    const parallelGroups: { [index: number]: TaggedVerse[] } = {};
    const filteredVerses: TaggedVerseCollection = [];

    for (const verse of verses) {
      const include = filter(verse);
      const parallelGroup = verse.parallelGroup;
      if (include) {
        if (this.optionsSelection.MergeParallels && !isNil(parallelGroup)) {
          if (isNil(parallelGroups[parallelGroup])) {
            parallelGroups[parallelGroup] = [];
            filteredVerses.push(parallelGroups[parallelGroup]);
          }
          parallelGroups[parallelGroup].push(verse);
        } else {
          filteredVerses.push(verse);
        }
      }
    }

    for (const parallels of Object.values(parallelGroups) as TaggedVerse[][]) {
      const sortedParallels = sortBy(parallels, (verse) => verse.reference.numericReference);
      const bookGroupedParallels = groupBy(sortedParallels, (verse) => verse.reference.book.key);
      parallels.length = 0;
      for (const bookGroup of Object.values(bookGroupedParallels) as TaggedVerse[][]) {
        let mergedBookVerses = bookGroup.shift();
        while (bookGroup.length > 0) {
          const nextBookVerse = bookGroup.shift();
          mergedBookVerses = {
            reference: {
              ...mergedBookVerses.reference,
              verses: `${mergedBookVerses.reference.verses}, ${nextBookVerse.reference.verses}`,
            },
            html: `${mergedBookVerses.html}${VERSE_SEPARATOR}${nextBookVerse.html}`,
            tags: union(mergedBookVerses.tags, nextBookVerse.tags),
            hasJesusWords: mergedBookVerses.hasJesusWords || nextBookVerse.hasJesusWords,
          };
        }
        parallels.push(mergedBookVerses);
      }
    }

    return filteredVerses;
  }

  private mapVerseCollectionItemToVerse(item: TaggedVerseCollectionItem): TaggedVerse {
    return Array.isArray(item) ? item[0] : item;
  }
}
