import { Injectable } from '@angular/core';
import { ScreenSizeService } from './screen-size.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { createBodyClassObservableHandler } from '../../utils/screen-size-util';
import { useAppFeaturesClass } from '../../vars';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  readonly useAppFeatures: Observable<boolean>;

  constructor(
    private readonly screenSizeService: ScreenSizeService,
  ) {
    this.useAppFeatures = this.screenSizeService.$isSmallScreen.pipe(
      startWith(false),
      map((isSmallScreen) => isSmallScreen || this.isCordova));
    createBodyClassObservableHandler(this.useAppFeatures, useAppFeaturesClass);
  }

  get isCordova(): boolean {
    return window.isCordova;
  }
}
