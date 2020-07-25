import { $bigScreen, bigScreenClass } from '../vars';
import { isNil } from 'lodash';
import { Observable } from 'rxjs';
import { setBodyClass } from './dom-util';

export const initScreenSizeCssClassHandlers = () => {
    createBodyClassMediaQueryHandler($bigScreen, bigScreenClass);
};

const createBodyClassMediaQueryHandler = (query: string, cssClass: string): void => {
    createMediaQueryHandler(query, (matches: boolean): void => setBodyClass(cssClass, matches));
};

export const createBodyClassObservableHandler = (observable: Observable<boolean>, cssClass: string): void => {
    observable.subscribe((on) => setBodyClass(cssClass, on));
};

export const createMediaQueryHandler = (
    query: string, changeHandler: (matches: boolean) => void): void => {
    const mediaQuery = window.matchMedia(`(${query})`);
    changeHandler(mediaQuery.matches);
    if (!isNil(mediaQuery.addEventListener)) {
        mediaQuery.addEventListener('change', (mediaQueryEvent: MediaQueryListEvent) => {
            changeHandler(mediaQueryEvent.matches);
        });
    } else {
        // tslint:disable-next-line: deprecation
        mediaQuery.addListener((mediaQueryEvent: MediaQueryListEvent) => {
            changeHandler(mediaQueryEvent.matches);
        });
    }
};
