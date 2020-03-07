import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { languages, DEFAULT_LANGUAGE } from '../content/languages';

@Injectable()
export class LanguageService implements OnDestroy {

  get language(): string {
    return this._language;
  }

  private readonly languageSubject = new BehaviorSubject<string>(DEFAULT_LANGUAGE);
  readonly language$ = this.languageSubject.asObservable();

  private _language: string;

  setLanguage(language: string) {
    language = language.toLowerCase();

    if (languages.includes(language)) {
      this._language = language;
      this.languageSubject.next(this._language);
    }
  }

  ngOnDestroy(): void {
    this.languageSubject.complete();
  }
}
