interface Window {
    isCordova: boolean;
    webFontConfigActive$: Promise<void>;
    deviceReady$: Promise<void>;
    loadScript: (src: string) => Promise<void>;
    exports?: { germanVerses?: VerseText[] };
}

interface VerseText {
    referenceId: string;
    html: string;
}
