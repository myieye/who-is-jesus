export const enum VerseTagKey {
    Authority,
    Blasphemy,
    Bridegroom,
    Christ,
    Clean,
    Clouds,
    Creator,
    Demons,
    Eternal,
    Faith,
    FP,
    Glory,
    God,
    Greater,
    Heaven,
    Himself,
    His,
    Holy,
    Honour,
    Humility,
    I_AM,
    Judge,
    King,
    Life,
    Lord,
    Lowly,
    Name,
    Omnipresent,
    Omniscient,
    One,
    Power,
    Right_Hand,
    Saviour,
    Sin,
    SoM,
    Son,
    Trinity,
    Unique,
    Worship,
    Worthy,
    YHWH,
    Sacrifice,
    Word,
    Immanuel,
    Light,
    Shepherd,
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
