import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BibleVerse } from '../bible';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerseComponent {

  @Input() verse: BibleVerse;

  constructor() { }
}
