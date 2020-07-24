import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { BG_BIBLES, BibleGatewayTranslation } from '../../content/bible-gateway-bibles';
import { flatMap } from 'lodash';
import { ModalController } from '@ionic/angular';

const bgBiblesByLanguage = Object.values(BG_BIBLES);
const bgBibles = flatMap(bgBiblesByLanguage, (bibleLanguageGroup) => bibleLanguageGroup.bibles);

@Component({
  selector: 'app-bible-translations-dialog',
  templateUrl: './bible-translations-dialog.component.html',
  styleUrls: ['./bible-translations-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleTranslationsDialogComponent implements OnInit {

  @Input() content: ContentService;

  @Input() set bibles(bibles: string[]) {
    this.selectedBibles = bibles?.length
      ? bibles.map((bibleKey) => this.findBible(bibleKey))
      : this.defaultBibles;
    this.prevSelectedBibles = [...this.selectedBibles];
  }

  readonly biblesByLanguage = bgBiblesByLanguage;
  hiddenBibles: { [index: string]: boolean } = {};

  prevSelectedBibles: BibleGatewayTranslation[];
  defaultBibles: BibleGatewayTranslation[];
  selectedBibles: BibleGatewayTranslation[];

  constructor(
    private readonly modalController: ModalController,
  ) {
  }

  async ngOnInit() {
    this.defaultBibles = this.content.defaultBibleTranslationKeys.map((bibleKey) => this.findBible(bibleKey));
  }

  save(): void {
    this.modalController.dismiss(this.selectedBibles.map((bible) => bible.key));
  }

  toggleBible(bible: BibleGatewayTranslation): void {
    const index = this.selectedBibles.indexOf(bible);
    if (index >= 0) {
      this.selectedBibles.splice(index, 1);
    } else {
      this.selectedBibles.push(bible);
    }
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
