export const enum VerseTagKey {
    Authority = 'Authority',
    Blasphemy = 'Blasphemy',
    Bridegroom = 'Bridegroom',
    Christ = 'Christ',
    Clean = 'Clean',
    Clouds = 'Clouds',
    Creator = 'Creator',
    Demons = 'Demons',
    Eternal = 'Eternal',
    Faith = 'Faith',
    FP = 'FP',
    Glory = 'Glory',
    God = 'God',
    Greater = 'Greater',
    Heaven = 'Heaven',
    Himself = 'Himself',
    His = 'His',
    Holy = 'Holy',
    Honour = 'Honour',
    Humility = 'Humility',
    I_AM = 'I_AM',
    Judge = 'Judge',
    King = 'King',
    Life = 'Life',
    Lord = 'Lord',
    Lowly = 'Lowly',
    Name = 'Name',
    Omnipresent = 'Omnipresent',
    Omniscient = 'Omniscient',
    One = 'One',
    Power = 'Power',
    Right_Hand = 'Right_Hand',
    Saviour = 'Saviour',
    Sin = 'Sin',
    SoM = 'SoM',
    Son = 'Son',
    Trinity = 'Trinity',
    Unique = 'Unique',
    Worship = 'Worship',
    Worthy = 'Worthy',
    YHWH = 'YHWH',
    Sacrifice = 'Sacrifice',
    Word = 'Word',
    Immanuel = 'Immanuel',
    Light = 'Light',
    Shepherd = 'Shepherd',
}

export const offLimits: VerseTagKey[] = [
    VerseTagKey.Sacrifice,
    VerseTagKey.Word,
    VerseTagKey.Immanuel,
    VerseTagKey.Light,
];

export interface VerseTag {
    key: VerseTagKey;
    name: string;
    description: string;
}

export type VerseTagMap = { [key in VerseTagKey]: VerseTag };
