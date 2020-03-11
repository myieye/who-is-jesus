import { Component, OnInit, Input } from '@angular/core';
import { VerseTag } from '../models/tags';

@Component({
  selector: 'app-tagged-verse-group-header',
  templateUrl: './tagged-verse-group-header.component.html',
  styleUrls: ['./tagged-verse-group-header.component.scss']
})
export class TaggedVerseGroupHeaderComponent {

  @Input() tag: VerseTag;

}
