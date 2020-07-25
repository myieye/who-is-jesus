import { Injectable } from '@angular/core';
import { $veryBigScreen, $smallScreen } from 'src/vars';
import { createMediaQueryHandler } from 'src/utils/media-util';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  private _isVeryBigScreen: boolean;
  get isVeryBigScreen(): boolean {
    return this._isVeryBigScreen;
  }

  private readonly isSmallScreenSubject = new BehaviorSubject<boolean>(false);
  readonly $isSmallScreen = this.isSmallScreenSubject.asObservable().pipe(shareReplay(1));

  constructor() {
    createMediaQueryHandler($veryBigScreen, (matches) => this._isVeryBigScreen = matches);
    createMediaQueryHandler($smallScreen, (matches) => this.isSmallScreenSubject.next(matches));
  }
}
