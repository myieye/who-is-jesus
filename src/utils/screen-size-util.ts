import { $bigScreen, bigScreenClass } from '../vars';
import { isNil } from 'lodash';
import { Observable } from 'rxjs';

export const initScreenSizeCssClassHandlers = () => {
    createBodyClassMediaQueryHandler($bigScreen, bigScreenClass);
};

const createBodyClassMediaQueryHandler = (query: string, cssClass: string): void => {
    createMediaQueryHandler(query, (matches: boolean): void => {
        window.document.body.classList.toggle(cssClass, matches);
    });
};

export const createBodyClassObservableHandler = (observable: Observable<boolean>, cssClass: string): void => {
    observable.subscribe((on) => window.document.body.classList.toggle(cssClass, on));
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
