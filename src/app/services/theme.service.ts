import { Injectable } from '@angular/core';
import { ThemeDetection } from '@ionic-native/theme-detection/ngx';
import { Platform } from '@ionic/angular';
import { darkMode, lightMode, themeKey, themes } from '../../vars';
import { pickHtmlClass } from '../../utils/dom-util';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ContentService } from './content.service';
import { UserSettingsService } from './user-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _theme: string;

  constructor(
    private readonly platform: Platform,
    private readonly themeDetection: ThemeDetection,
    private readonly statusBar: StatusBar,
    private readonly content: ContentService,
    private readonly userSettings: UserSettingsService,
  ) {
  }

  async init(): Promise<void> {
    this._theme = await this.pickInitialTheme();
    this.refreshDisplayTheme();
  }

  get theme(): string {
    return this._theme;
  }

  set theme(theme: string) {
    if (this.isValidTheme(theme)) {
      this._theme = theme;
      this.userSettings.put(themeKey, theme);
      this.refreshDisplayTheme();
    }
  }

  get nextThemeName(): string {
    if (this.theme === lightMode) {
      return this.content.dark;
    } else {
      return this.content.light;
    }
  }

  toggleTheme(): void {
    const currThemeI = themes.indexOf(this.theme);
    const nextThemeI = (currThemeI + 1) % themes.length;
    this.theme = themes[nextThemeI];
  }

  private async pickInitialTheme(): Promise<string> {
    const userTheme: string = await this.userSettings.get(themeKey);

    if (this.isValidTheme(userTheme)) {
      return userTheme;
    }

    const preferseDarkMode = await this.prefersDarkMode();
    return preferseDarkMode ? darkMode : lightMode;
  }

  private refreshDisplayTheme(): void {
    pickHtmlClass(this.theme, themes);

    if (this.platform.is('cordova')) {
      if (this.theme === lightMode) {
        this.statusBar.styleDefault();
      } else if (this.theme === darkMode) {
        this.statusBar.styleBlackOpaque();
      }
    }
  }

  private async prefersDarkMode(): Promise<boolean> {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }

    return this.platform.is('cordova') &&
      (await this.themeDetection.isDarkModeEnabled())?.value;
  }

  private isValidTheme(theme: string): boolean {
    return themes.includes(theme);
  }
}
