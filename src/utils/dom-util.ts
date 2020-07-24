export const setBodyClass = (cssClass: string, add = true): void => {
    window.document.body.classList.toggle(cssClass, add);
};

export const setHtmlClass = (cssClass: string, add = true): void => {
    window.document.documentElement.classList.toggle(cssClass, add);
};
