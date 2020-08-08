import { Injectable } from '@angular/core';
import { ScreenSizeService } from './screen-size.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { createBodyClassObservableHandler } from '../../utils/media-util';
import { useAppFeaturesClass } from '../../vars';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  readonly useAppFeatures: Observable<boolean>;

  get isCordova(): boolean {
    return this.platform.is('cordova') || this.readySource === 'cordova' || window.isCordova;
  }

  get isIos(): boolean {
    return this.platform.is('ios');
  }

  private readySource: string;

  constructor(
    private readonly screenSizeService: ScreenSizeService,
    private readonly platform: Platform,
  ) {
    this.useAppFeatures = this.screenSizeService.$isSmallScreen.pipe(
      startWith(false),
      map((isSmallScreen) => isSmallScreen || this.isCordova));
    createBodyClassObservableHandler(this.useAppFeatures, useAppFeaturesClass);
  }

  async ready(): Promise<void> {
    this.readySource = await this.platform.ready();
  }
}
