import { Component, ChangeDetectionStrategy, Input, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ContentService } from '../../services/content.service';
import {
  BG_BIBLES,
  BibleGatewayLanguageTranslationGroup,
  BibleGatewayTranslation,
  BibleGatewayLanguageKey,
} from '../../content/bible-gateway-bibles';
import { flatMap, isEmpty } from 'lodash';
import { ModalController, IonInfiniteScroll, IonInput } from '@ionic/angular';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

const bgBiblesByLanguage = Object.values(BG_BIBLES);
const bgBibles = flatMap(bgBiblesByLanguage, (bibleLanguageGroup) => bibleLanguageGroup.bibles);

const RENDER_STEP_COUNT = 10;

@Component({
  selector: 'app-bible-translations-dialog',
  templateUrl: './bible-translations-dialog.component.html',
  styleUrls: ['./bible-translations-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleTranslationsDialogComponent implements OnInit, OnDestroy {

  @Input() content: ContentService;

  @Input() set bibles(bibles: string[]) {
    this.selectedBibles = bibles?.length
      ? bibles.map((bibleKey) => this.findBible(bibleKey))
      : this.defaultBibles;
    this.prevSelectedBibles = [...this.selectedBibles];
  }

  private subscribed = false;
  @ViewChild(IonInput) set searchField(searchField: IonInput) {
    if (this.subscribed) {
      return;
    }
    this.subscribed = true;

    searchField.ionChange.pipe(
      debounceTime(300),
      takeUntil(this.$destroy),
    ).subscribe(($event) => this.searchChanged($event.detail.value));
  }

  renderedBibleCount = RENDER_STEP_COUNT;
  bibleCount: number;

  renderedBiblesByLanguage: BibleGatewayLanguageTranslationGroup[];
  private _biblesByLanguage: BibleGatewayLanguageTranslationGroup[];
  set biblesByLanguage(biblesByLanguage: BibleGatewayLanguageTranslationGroup[]) {
    this._biblesByLanguage = biblesByLanguage;
    this.bibleCount = biblesByLanguage.reduce((total, next) => total + next.bibles.length, 0);
    this.renderedBiblesByLanguage = this.sliceBiblesByLanguage(biblesByLanguage, this.renderedBibleCount);
  }
  get biblesByLanguage(): BibleGatewayLanguageTranslationGroup[] {
    return this._biblesByLanguage;
  }

  prevSelectedBibles: BibleGatewayTranslation[];
  defaultBibles: BibleGatewayTranslation[];
  selectedBibles: BibleGatewayTranslation[];

  private readonly $destroy = new Subject();

  constructor(
    private readonly modalController: ModalController,
    private readonly ref: ChangeDetectorRef,
  ) {
  }

  async ngOnInit() {
    this.biblesByLanguage = bgBiblesByLanguage;
    this.defaultBibles = this.content.defaultBibleTranslationKeys.map((bibleKey) => this.findBible(bibleKey));
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }

  save(): void {
    this.modalController.dismiss(this.selectedBibles.map((bible) => bible.key));
  }

  toggleBible(bible: BibleGatewayTranslation): void {
    const index = this.selectedBibles.indexOf(bible);
    if (index >= 0) {
      this.selectedBibles.splice(index, 1);
    } else {
      this.selectedBibles.push(bible);
    }
  }

  deselectBible(bible: BibleGatewayTranslation): void {
    this.selectedBibles = this.selectedBibles.filter((selectedBible) => selectedBible !== bible);
  }

  searchChanged(search: string): void {
    this.renderedBibleCount = RENDER_STEP_COUNT;

    search = search?.trim()?.toLocaleLowerCase();

    if (isEmpty(search)) {
      this.biblesByLanguage = bgBiblesByLanguage;
    } else {
      const biblesByLanguage = [];

      bgBiblesByLanguage.forEach((bibleLanguageGroup) => {
        const languageName = bibleLanguageGroup.language.name;
        const languageMatch = languageName.toLocaleLowerCase().includes(search);

        // If the language matched, show all the bibles
        if (languageMatch) {
          biblesByLanguage.push(bibleLanguageGroup);
        } else {
          const matchedBibles = bibleLanguageGroup.bibles.filter((bible) =>
            bible.name.toLocaleLowerCase().includes(search));
          if (matchedBibles.length) {
            biblesByLanguage.push({
              language: bibleLanguageGroup.language,
              bibles: matchedBibles,
            });
          }
        }
      });

      this.biblesByLanguage = biblesByLanguage;
    }

    this.ref.markForCheck();
  }

  loadMoreBibles(infiniteScroll: IonInfiniteScroll): void {
    this.renderedBibleCount += RENDER_STEP_COUNT;
    this.renderedBiblesByLanguage = this.sliceBiblesByLanguage(this.biblesByLanguage, this.renderedBibleCount);
    infiniteScroll.complete();
  }

  bibleLanguageGroupTracker(i: number, bibleLanuageGroup: BibleGatewayLanguageTranslationGroup): BibleGatewayLanguageKey {
    return bibleLanuageGroup.language.key;
  }

  private sliceBiblesByLanguage(
    biblesByLanguage: BibleGatewayLanguageTranslationGroup[], count: number): BibleGatewayLanguageTranslationGroup[] {
    const slicedBiblesByLanguage = [];

    let i = 0;
    for (const bibleLanuageGroup of biblesByLanguage) {
      if (i === count) {
        break;
      }

      const bibles = [];
      slicedBiblesByLanguage.push({ language: bibleLanuageGroup.language, bibles });
      for (const bible of bibleLanuageGroup.bibles) {
        bibles.push(bible);

        if (++i === count) {
          break;
        }
      }
    }

    return slicedBiblesByLanguage;
  }

  private findBible(bibleKey: string): BibleGatewayTranslation {
    return bgBibles.find((bgBible) => bgBible.key === bibleKey);
  }
}
