import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BibleReference, TaggedVerse } from '../models/bible';
import { ContentService } from '../services/content.service';
import { DebugSettings } from '../../debug-settings';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerseComponent {

  @Input() verse: TaggedVerse;
  @Input() translations: string[];

  debugTags = DebugSettings.verseTags;

  get tags(): string[] {
    return this.verse.tags.map((tag) => this.content.tags[tag].name);
  }

  constructor(readonly content: ContentService) { }

  getOtherTranslationsLink(ref: BibleReference): string {
    const translations = this.translations.join(';');
    return `https://www.biblegateway.com/passage/?search=${BibleReference.toString(ref)}&version=${translations}`;
  }
}
