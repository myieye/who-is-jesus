import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-tag-instructions-content',
  template: `
<ng-container [ngSwitch]="languageService.language">
  <ng-container *ngSwitchCase="'en'">
    Select a <mat-chip class='clickable'>tag</mat-chip> to focus your search...
  </ng-container>
  <ng-container *ngSwitchCase="'de'">
    Wähle ein <mat-chip class='clickable'>Stichwort,</mat-chip> um deine Suche einzugrenzen...
  </ng-container>
</ng-container>
  `
})
export class TagInstructionsContentComponent {
  constructor(
    readonly languageService: LanguageService,
  ) {
  }
}
