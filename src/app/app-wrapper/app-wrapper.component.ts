import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { isNil, isEqual } from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from '../services/language.service';
import { ContentService } from '../services/content.service';
import { DebugSettings } from '../../debug-settings';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { ThemeDetection } from '@ionic-native/theme-detection/ngx';
import { setHtmlClass } from 'src/utils/dom-util';
import { darkClass } from '../../vars';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
  providers: [LanguageService, ContentService],
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
    private readonly statusBar: StatusBar,
    private readonly platform: Platform,
    private readonly theme: ThemeDetection,
  ) {
    this.route.paramMap.subscribe((paramMap) => this.onParamsChanged(paramMap));
  }

  private onParamsChanged(paramMap: ParamMap): void {
    this.languageService.init(paramMap.get('lang'));

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
        .then(() => this.initTheme());

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

  async initTheme(): Promise<void> {
    if (await this.useDarkMode()) {
      setHtmlClass(darkClass);
      if (this.platform.is('cordova')) {
        this.statusBar.styleBlackOpaque();
      }
    }
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

  private async useDarkMode(): Promise<boolean> {
    return this.platform.is('cordova') &&
      (await this.theme.isDarkModeEnabled())?.value;
  }
}
