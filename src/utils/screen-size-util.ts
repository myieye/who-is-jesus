import { $bigScreen, bigScreenClass } from '../vars';
import { isNil } from 'lodash';

export const initScreenSizeCssClassHandlers = () => {
    createBodyClassMediaQueryHandler($bigScreen, bigScreenClass);
};

const createBodyClassMediaQueryHandler = (query: string, cssClass: string): void => {
    createMediaQueryHandler(query, (matches: boolean): void => {
        window.document.body.classList.toggle(cssClass, matches);
    });
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
        mediaQuery.addListener((mediaQueryEvent: MediaQueryListEvent) => {
            changeHandler(mediaQueryEvent.matches);
        });
    }
};
