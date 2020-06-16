webFontConfigActive$ = new Promise((resolve) => {
    WebFontConfig = {
        google: { families: ['Lovers+Quarrel', 'Montserrat:200,400,600', 'Material+Icons'] },
        active: resolve,
    };
});