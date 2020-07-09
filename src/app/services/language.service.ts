import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { languages, DEFAULT_LANGUAGE, Language } from '../content/languages';
import { CustomLanguageConfig } from '../models/mobile-language-config';
import { languageConfigs } from '../content/language-configs';
import { Router } from '@angular/router';

@Injectable()
export class LanguageService implements OnDestroy {

  get language(): Language {
    return this._language;
  }

  get languageConfig(): CustomLanguageConfig | undefined {
    return languageConfigs[this.language];
  }

  get languages(): Language[] {
    return [...languages];
  }

  private readonly languageSubject = new BehaviorSubject<Language>(DEFAULT_LANGUAGE);
  readonly language$ = this.languageSubject.asObservable();

  private _language: Language;

  constructor(
    private readonly router: Router,
  ) {
  }

  init(language: string) {
    language = language.toLowerCase();

    if (languages.includes(language as Language)) {
      this._language = language as Language;
      this.languageSubject.next(this._language);
    }
  }

  setLanguage(language: string): void {
    setTimeout(() => {
      this.router.navigate([language], {
        queryParamsHandling: 'merge',
      });
    });
  }

  ngOnDestroy(): void {
    this.languageSubject.complete();
  }
}
