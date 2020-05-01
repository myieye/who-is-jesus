import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UiBibleReference, TaggedVerse, TaggedVerseCollectionItem } from '../models/bible';
import { ContentService } from '../services/content.service';
import { DebugSettings } from '../../debug-settings';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss'],
})
export class VerseComponent {

  @Input() set verses(verses: TaggedVerseCollectionItem) {
    this._verses = Array.isArray(verses) ? verses : [verses];
    this.selectedVerse = this._verses[0];
  }

  @Input() translations: string[];

  _verses: TaggedVerse[];
  selectedVerse: TaggedVerse;

  debugTags = DebugSettings.verseTags;

  constructor(readonly content: ContentService) { }

  getTagsForVerse(verse: TaggedVerse): string[] {
    return verse.tags.map((tag) => this.content.tags[tag].name);
  }

  getOtherTranslationsLink(ref: UiBibleReference): string {
    const translations = this.translations.join(';');
    return `https://www.biblegateway.com/passage/?search=${UiBibleReference.toString(ref)}&version=${translations}`;
  }

  verseClicked(verse: TaggedVerse): void {
    this.selectedVerse = verse;
  }
}
