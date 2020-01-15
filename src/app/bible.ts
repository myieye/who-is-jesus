export enum BibleBookKey {
    Gen = 'Gen', Ex = 'Ex', Lev = 'Lev', Num = 'Num', Deut = 'Deut', Josh = 'Josh', Judg = 'Judg',
    Ruth = 'Ruth', Sam1 = 'Sam1', Sam2 = 'Sam2', Kings1 = 'Kings1', Kings2 = 'Kings2',
    Chron1 = 'Chron1', Chron2 = 'Chron2', Ezra = 'Ezra', Neh = 'Neh', Est = 'Est', Job = 'Job',
    Ps = 'Ps', Prov = 'Prov', Eccles = 'Eccles', Song = 'Song', Isa = 'Isa', Jer = 'Jer',
    Lam = 'Lam', Ezek = 'Ezek', Dan = 'Dan', Hos = 'Hos', Joel = 'Joel', Amos = 'Amos', Obad = 'Obad',
    Jonah = 'Jonah', Mic = 'Mic', Nah = 'Nah', Hab = 'Hab', Zeph = 'Zeph', Hag = 'Hag', Zech = 'Zech', Mal = 'Mal',
    Matt = 'Matt', Mark = 'Mark', Luke = 'Luke', John = 'John', Acts = 'Acts', Rom = 'Rom',
    Cor1 = 'Cor1', Cor2 = 'Cor2', Gal = 'Gal', Eph = 'Eph', Phil = 'Phil', Col = 'Col',
    Thess1 = 'Thess1', Thess2 = 'Thess2', Tim1 = 'Tim1', Tim2 = 'Tim2', Titus = 'Titus', Philem = 'Philem',
    Heb = 'Heb', James = 'James', Pet1 = 'Pet1', Pet2 = 'Pet2', John1 = 'John1', John2 = 'John2', John3 = 'John3',
    Jude = 'Jude', Rev = 'Rev'
}

export interface BibleReference {
    book: BibleBook;
    chapter: number;
    verses: string;
}

export interface BibleVerse {
    reference: BibleReference;
    text: string;
    html: string;
}

export interface BibleBook {
    key: BibleBookKey;
    full: string;
    abbr: string;
}

export type BibleBookMap = { [key in BibleBookKey]: BibleBook};
