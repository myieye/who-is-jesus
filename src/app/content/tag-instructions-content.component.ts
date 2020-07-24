import { Component } from '@angular/core';
import { Language } from './languages';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-tag-instructions-content',
  template: `
<ng-container [ngSwitch]="content.languageCode">
  <ng-container *ngSwitchCase="Language.EN">
    Select a <ion-chip class='clickable verse-tag'>tag</ion-chip> to focus your search...
  </ng-container>
  <ng-container *ngSwitchCase="Language.DE">
    Wähle ein <ion-chip class='clickable verse-tag'>Stichwort,</ion-chip> um deine Suche einzugrenzen...
  </ng-container>
</ng-container>
  `
})
export class TagInstructionsContentComponent {

  Language = Language;

  constructor(
    readonly content: ContentService,
  ) {
  }
}
