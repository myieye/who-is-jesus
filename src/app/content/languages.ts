export enum Language { EN = 'en', DE = 'de' }

export const languages: Readonly<Language[]> = Object.freeze([...Object.values(Language)].sort());

export const DEFAULT_LANGUAGE = Language.EN;
