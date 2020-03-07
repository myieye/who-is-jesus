import { TaggedVerse, BibleBookMap } from '../models/bible';
import { VerseTagMap } from '../models/tags';

export class ContentTemplate {
    jesus = '';
    all = '';
    synopticGospels = '';
    standard = '';
    chronological = '';
    pageTitle = '';
    sources = '';
    order = '';
    infoAboutTitle = '';
    infoBibleTranslationTitle = '';
    infoChronologyTitle = '';
    infoAbout = '';
    infoBibleTranslation = '';
    infoChronology = '';
    verses: TaggedVerse[] = [];
    bibleBooks: BibleBookMap = {} as BibleBookMap;
    tags: VerseTagMap = {} as VerseTagMap;
}

type ContentProps = Array<keyof ContentTemplate>;

export type Content = ContentTemplate;

export const CONTENT_PROPS = Object.keys(new ContentTemplate()) as ContentProps;
