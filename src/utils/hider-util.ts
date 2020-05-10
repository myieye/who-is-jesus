import { isNil } from 'lodash';

const HIDDEN_INSTRUCTIONS_CLASS = 'hidden-instructions';

export const hideInstructions = (elem: HTMLElement, animate = true): void => {
    const currHeight = elem.getBoundingClientRect().height;
    elem.style.maxHeight = `${currHeight}px`;
    hideElement(elem, HIDDEN_INSTRUCTIONS_CLASS);
};

const hideElement = (elem: HTMLElement, hiddenClass?: string): void => {
    if (isNil(hiddenClass)) {
        elem.classList.add('hidden');
    } else {
        forceReflow(elem);
        applyClass(elem, hiddenClass);
    }
};

const applyClass = (elem: HTMLElement, cssClass: string): void => {
    elem.classList.add(cssClass);
};

// https://gist.github.com/paulirish/5d52fb081b3570c81e3a
const forceReflow = (elem: HTMLElement): void => {
    // tslint:disable-next-line:no-unused-expression
    elem.offsetLeft;
};
