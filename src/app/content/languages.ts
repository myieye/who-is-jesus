export enum Language { EN = 'en', DE = 'de' }

export const languages: Language[] = [...Object.values(Language)].sort();

export const DEFAULT_LANGUAGE = Language.EN;
