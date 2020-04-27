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
    options = '';
    multipleTagSelection = '';
    multipleTags = '';
    singleTag = '';
    groupByTag = '';
    mergeParallels = '';
    about = '';
    noVersesFound = '';
    searchByLanguageOrTranslation = '';
    bibleGatewayTranslations = '';
    bibleGatewayTranslationsDescription = '';
    bibleGatewayLinkDescription = '';
    bibleTranslationCopyrightNotice = '';
    bibleTranslationUnderCopyright = true;
    defaultBibleTranslationKeys: string[] = [];
    verses: TaggedVerse[] = [];
    bibleBooks: BibleBookMap = {} as BibleBookMap;
    tags: VerseTagMap = {} as VerseTagMap;
    showVerseNumbers = false;
}

type ContentProps = Array<keyof ContentTemplate>;

export type Content = ContentTemplate;

export const CONTENT_PROPS = Object.keys(new ContentTemplate()) as ContentProps;
