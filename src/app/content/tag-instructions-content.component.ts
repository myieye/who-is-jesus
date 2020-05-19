import { Component } from '@angular/core';
import { Language } from './languages';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-tag-instructions-content',
  template: `
<ng-container [ngSwitch]="content.language">
  <ng-container *ngSwitchCase="Language.EN">
    Select a <mat-chip class='clickable'>tag</mat-chip> to focus your search...
  </ng-container>
  <ng-container *ngSwitchCase="Language.DE">
    Wähle ein <mat-chip class='clickable'>Stichwort,</mat-chip> um deine Suche einzugrenzen...
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
