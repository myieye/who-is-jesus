import { Injectable } from '@angular/core';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  constructor(
    private readonly appPreferences: AppPreferences,
    private readonly platform: PlatformService,
  ) {
  }

  async put(key: string, value: string): Promise<void> {
    if (this.platform.isCordova) {
      return await this.appPreferences.store(undefined, key, value);
    } else {
      return localStorage.setItem(key, value);
    }
  }

  async get(key: string): Promise<string | undefined> {
    if (this.platform.isCordova) {
      return await this.appPreferences.fetch(undefined, key);
    } else {
      return localStorage.getItem(key);
    }
  }
}
