import { Component, Inject, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContentService } from '../services/content.service';
import { BG_BIBLES, BibleGatewayTranslation } from '../content/bible-gateway-bibles';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { flatMap } from 'lodash';
import { first } from 'rxjs/operators';

interface BibleTranslationsDialogData {
  content: ContentService;
  bibles: string[];
}

const bgBiblesByLanguage = Object.values(BG_BIBLES);
const bgBibles = flatMap(bgBiblesByLanguage, (bibleLanguageGroup) => bibleLanguageGroup.bibles);

@Component({
  selector: 'app-bible-translations-dialog',
  templateUrl: './bible-translations-dialog.component.html',
  styleUrls: ['./bible-translations-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleTranslationsDialogComponent {

  @ViewChild(MatSelectionList, { static: true }) translationList: MatSelectionList;

  readonly biblesByLanguage = bgBiblesByLanguage;
  hiddenBibles: { [index: string]: boolean } = {};

  readonly content: ContentService;
  readonly defaultBibles: BibleGatewayTranslation[];
  selectedBibles: BibleGatewayTranslation[];

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: BibleTranslationsDialogData,
    dialogRef: MatDialogRef<BibleTranslationsDialogComponent>,
  ) {
    this.content = data.content;
    this.defaultBibles = this.content.defaultBibleTranslationKeys.map((bibleKey) => this.findBible(bibleKey));
    this.selectedBibles = data.bibles?.length
      ? data.bibles.map((bibleKey) => this.findBible(bibleKey))
      : this.defaultBibles;

    dialogRef.beforeClosed().pipe(first()).subscribe(() =>
      dialogRef.close(this.selectedBibles.map((bible) => bible.key)));
  }

  selectedBiblesChanged(selectedOptions: SelectionModel<MatListOption>): void {
    this.selectedBibles = selectedOptions.selected.map((option) => option.value) as BibleGatewayTranslation[];
  }

  deselectBible(bible: BibleGatewayTranslation): void {
    this.selectedBibles = this.selectedBibles.filter((selectedBible) => selectedBible !== bible);
  }

  searchChanged(search: string): void {
    search = search?.trim()?.toLocaleLowerCase();

    this.hiddenBibles = {};

    if (search) {
      bgBiblesByLanguage.forEach((bibleLanguageGroup) => {
        const languageName = bibleLanguageGroup.language.name;
        const languageMatch = languageName.toLocaleLowerCase().includes(search);

        // If the language matched, don't hide any bibles

        // If it didn't match
        if (!languageMatch) {
          const unmatchedBibles = bibleLanguageGroup.bibles.filter((bible) =>
            !bible.name.toLocaleLowerCase().includes(search));

          // Hide the language if none of the bibles matched
          if (unmatchedBibles.length === bibleLanguageGroup.bibles.length) {
            this.hiddenBibles[languageName] = true;
          } else { // Otherwise, only hide the individual bibles
            unmatchedBibles.forEach((bible) => {
              this.hiddenBibles[bible.name] = true;
            });
          }
        }
      });
    }
  }

  private findBible(bibleKey: string): BibleGatewayTranslation {
    return bgBibles.find((bgBible) => bgBible.key === bibleKey);
  }
}
