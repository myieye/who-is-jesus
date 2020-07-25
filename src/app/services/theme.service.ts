import { Injectable } from '@angular/core';
import { ThemeDetection } from '@ionic-native/theme-detection/ngx';
import { Platform } from '@ionic/angular';
import { darkMode, lightMode, themeKey, themes } from '../../vars';
import { pickHtmlClass } from '../../utils/dom-util';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ContentService } from './content.service';

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
      localStorage.setItem(themeKey, theme);
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

  private get hasUserTheme(): boolean {
    return this.isValidTheme(this.userTheme);
  }

  private get userTheme(): string {
    return localStorage.getItem(themeKey);
  }

  private async pickInitialTheme(): Promise<string> {
    if (this.hasUserTheme) {
      return this.userTheme;
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
