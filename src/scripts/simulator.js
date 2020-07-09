const wait = (seconds = 5) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

const scrollTo = (selector) =>
    $('#main-content ion-content').animate({ scrollTop: $(selector).offset().top }, 0);

const step = async (action) => {
    await wait();
    await action && action();
    await wait();
};

(async () => {
    step();

    step(() => scrollTo('app-tag-list'));

    step (() => {
        $('.static-tag-list mat-chip')[11].click();
        scrollTo('app-tagged-verse-group-header');
    });

    step(() => {
        $('ion-menu-button').click();
        $('ion-item').click();
    });
})();
