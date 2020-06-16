import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { languages, DEFAULT_LANGUAGE, Language } from '../content/languages';
import { CustomLanguageConfig } from '../models/mobile-language-config';
import { languageConfigs } from '../content/language-configs';

@Injectable()
export class LanguageService implements OnDestroy {

  get language(): Language {
    return this._language;
  }

  get languageConfig(): CustomLanguageConfig | undefined {
    return languageConfigs[this.language];
  }

  private readonly languageSubject = new BehaviorSubject<Language>(DEFAULT_LANGUAGE);
  readonly language$ = this.languageSubject.asObservable();

  private _language: Language;

  setLanguage(language: string) {
    language = language.toLowerCase();

    if (languages.includes(language as Language)) {
      this._language = language as Language;
      this.languageSubject.next(this._language);
    }
  }

  ngOnDestroy(): void {
    this.languageSubject.complete();
  }
}
