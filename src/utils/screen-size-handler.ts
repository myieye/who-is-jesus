import { $bigScreen, bigScreenClass } from '../vars';

export const initScreenSizeHandler = () => {
    const toggleBigScreenClass = (isBigScreen: boolean): void => {
        window.document.body.classList.toggle(bigScreenClass, isBigScreen);
    };

    const mediaQuery = window.matchMedia(`(${$bigScreen})`);
    toggleBigScreenClass(mediaQuery.matches);
    mediaQuery.addEventListener('change', (mediaQueryEvent: MediaQueryListEvent) => {
        toggleBigScreenClass(mediaQueryEvent.matches);
    });
};
