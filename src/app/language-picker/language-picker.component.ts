import { Component } from '@angular/core';
import { languages } from '../content/languages';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent {

  readonly languages = languages;
  readonly language$ = this.languageService.language$;

  constructor(
    private readonly languageService: LanguageService,
    ) {
  }

  selectLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }
}
