import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { isNil, isEqual } from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from '../services/language.service';
import { ContentService } from '../services/content.service';
import { DebugSettings } from '../../debug-settings';
import { Platform } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { QueryParamService } from '../services/query-param.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
  providers: [LanguageService, ContentService, ThemeService],
})
export class AppWrapperComponent {

  appStarted = false;
  enabled = false;
  loading = true;

  get isCordova(): boolean {
    return window.isCordova;
  }

  private previousParams: ParamMap;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly ref: ChangeDetectorRef,
    private readonly snackBar: MatSnackBar,
    private readonly languageService: LanguageService,
    private readonly contentService: ContentService,
    private readonly platform: Platform,
    private readonly themeService: ThemeService,
    private readonly queryParamService: QueryParamService,
  ) {
    this.route.paramMap.subscribe((paramMap) => this.onParamsChanged(paramMap));
  }

  private async onParamsChanged(paramMap: ParamMap): Promise<void> {
    const lang = paramMap.get('lang');

    if (isNil(lang)) {
      if (await this.queryParamService.loadSavedPath()) {
        return;
      } else {
        this.languageService.init();
        return;
      }
    }

    this.languageService.init(lang);

    // Perform a brute force recreation of the app
    if (isNil(this.previousParams) || !isEqual(this.previousParams, paramMap)) {
      let languageVersesAvailable = true;

      let contentIniter = this.loadLanguageVerses()
        .catch(() => languageVersesAvailable = false)
        .finally(() => this.contentService.initPropsDynamically()) as Promise<unknown>;

      if (this.enabled) {
        this.loading = true;
        this.enabled = false;
        this.ref.detectChanges();
        contentIniter = contentIniter.then(() => new Promise((resolve) => setTimeout(resolve, 500)));
      }

      contentIniter = contentIniter
        .then(() => window.deviceReady$)
        .then(() => window.webFontConfigActive$)
        .then(() => this.platform.ready())
        .then(() => this.themeService.init());

      contentIniter.then(() => {
        this.enabled = true;
        this.ref.detectChanges();
        this.loading = false;
        setTimeout(() => navigator.splashscreen?.hide(), 500);
        this.appStarted = true;

        if (DebugSettings.reloadNotification) {
          console.log('Reloaded with params:', paramMap);
          this.snackBar.open('Reloaded', undefined, { duration: 3000 });
        }

        if (!languageVersesAvailable) {
          this.showInternetRequiredMessage();
        }
      });
    }

    this.previousParams = paramMap;
  }

  private loadLanguageVerses(): Promise<void> {
    const languageConfig = this.languageService.languageConfig;

    if (isNil(languageConfig) || !isNil(languageConfig.getter())) {
      return Promise.resolve();
    }

    return window.loadScript(languageConfig.url);
  }

  private showInternetRequiredMessage(): void {
    this.snackBar.open(
      this.contentService.internetRequiredForLanguageVerses, undefined, { duration: 10000 });
  }
}
