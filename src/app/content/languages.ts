export enum Language { EN = 'en', DE = 'de' }

export const languages: string[] = [...Object.values(Language)].sort();

export const DEFAULT_LANGUAGE = 'en';
