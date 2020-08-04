import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { languages, DEFAULT_LANGUAGE, Language } from '../content/languages';
import { CustomLanguageConfig } from '../models/mobile-language-config';
import { languageConfigs } from '../content/language-configs';
import { Router } from '@angular/router';
import { isNil } from 'lodash';
import { QueryParamService } from './query-param.service';

const userCulture =
  navigator.languages && navigator.languages[0] || // Chrome / Firefox
  navigator.language; // All browsers
const userLang = userCulture.substring(0, 2).toLowerCase() as Language;
const defaultLang = languages.includes(userLang) ? userLang : DEFAULT_LANGUAGE;

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
    private readonly queryParamService: QueryParamService,
  ) {
  }

  init(language?: string): void {
    if (isNil(language)) {
      this.setLanguage(defaultLang, false);
      return;
    }

    language = language.toLowerCase();

    if (languages.includes(language as Language)) {
      this._language = language as Language;
      this.languageSubject.next(this._language);
    }
  }

  setLanguage(language: string, save = true): void {
    setTimeout(() => {
      this.router.navigate([language], {
        queryParamsHandling: 'merge',
      }).then(() => {
        if (save) {
          this.queryParamService.saveCurrentPath();
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.languageSubject.complete();
  }
}
