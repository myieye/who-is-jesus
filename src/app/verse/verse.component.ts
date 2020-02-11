import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BibleReference, BibleVerse } from '../models/bible';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerseComponent {

  @Input() verse: BibleVerse;

  constructor() { }

  getOtherTranslationsLink(ref: BibleReference): string {
    return `https://www.biblegateway.com/passage/?search=${BibleReference.toString(ref)}&version=ESV;RSV;NKJV`;
  }
}
