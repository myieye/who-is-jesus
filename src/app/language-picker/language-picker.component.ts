import { Component, OnInit } from '@angular/core';
import { languages } from '../content/languages';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';

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
    private readonly router: Router,
    ) {
  }

  selectLanguage(language: string): void {
    setTimeout(() => {
      this.router.navigate([language], {
        queryParamsHandling: 'merge',
      });
    });
  }
}
