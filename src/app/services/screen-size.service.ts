import { Injectable } from '@angular/core';
import { $veryBigScreen } from 'src/vars';
import { createMediaQueryHandler } from 'src/utils/screen-size-util';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  private _isVeryBigScreen: boolean;
  get isVeryBigScreen(): boolean {
    return this._isVeryBigScreen;
  }

  constructor() {
    createMediaQueryHandler($veryBigScreen, (matches) => this._isVeryBigScreen = matches);
  }
}
