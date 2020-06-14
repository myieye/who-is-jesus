import { Component, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { UiBibleReference, TaggedVerse, TaggedVerseCollectionItem } from '../models/bible';
import { ContentService } from '../services/content.service';
import { DebugSettings } from '../../debug-settings';
import { Subject } from 'rxjs';
import { VerseTagKey, VerseTag } from '../models/tags';
import { isNil } from 'lodash';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerseComponent implements OnDestroy {

  @Input()
  set verses(verses: TaggedVerseCollectionItem) {
    this._verses = Array.isArray(verses) ? verses : [verses];
    this.selectedVerse = this._verses[0];
  }

  @Input()
  translations: string[];

  @Output()
  readonly tagClicked = new EventEmitter<VerseTagKey>();

  _verses: TaggedVerse[];
  selectedVerse: TaggedVerse;

  private _showTags = DebugSettings.verseTags;
  set showTags(showTags: boolean) {
    this._showTags = showTags;
    this.ref.markForCheck();
  }
  get showTags(): boolean {
    return this._showTags;
  }

  private readonly destroy$ = new Subject<void>();

  constructor(
    readonly content: ContentService,
    private readonly ref: ChangeDetectorRef,
    window: Window,
  ) {
    VerseComponent.initialize(window);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getTagsForVerse(verse: TaggedVerse): VerseTag[] {
    return verse.tags.map((tag) => this.content.tags[tag]);
  }

  getOtherTranslationsLink(ref: UiBibleReference): string {
    const translations = this.translations.join(';');
    return `https://www.biblegateway.com/passage/?search=${UiBibleReference.toString(ref)}&version=${translations}`;
  }

  verseClicked(verse: TaggedVerse): void {
    this.selectedVerse = verse;
  }

  toggleTags(event: MouseEvent): void {
    event.stopPropagation();
    this.showTags = !this.showTags;
    VerseComponent.closeTags();
    VerseComponent.verseShowingTags = this.showTags ? this : undefined;
  }

  // tslint:disable:member-ordering
  private static initialized?: true;
  private static verseShowingTags?: VerseComponent;
  private static initialize(window: Window): void {
    if (!VerseComponent.initialized) {
      window.addEventListener('click', VerseComponent.closeTags);
      VerseComponent.initialized = true;
    }
  }
  private static closeTags(): void {
    if (!isNil(VerseComponent.verseShowingTags)) {
      VerseComponent.verseShowingTags.showTags = false;
      VerseComponent.verseShowingTags = undefined;
    }
  }
  // tslint:enable:member-ordering
}
