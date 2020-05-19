import { TaggedVerse, BibleBookMap } from '../models/bible';
import { VerseTagMap } from '../models/tags';
import { Language } from './languages';

// tslint:disable:member-ordering
export class ContentTemplate {
    language: Language = undefined;
    jesus = '';
    all = '';
    synopticGospels = '';
    standard = '';
    chronological = '';
    pageTitle = '';
    pageIntro = (verseCount: number) => '';
    optionInstructions = '';
    sources = '';
    order = '';
    infoAboutTitle = '';
    infoAbout = '';
    infoBibleTranslationTitle = '';
    infoBibleTranslation = '';
    infoChronologyTitle = '';
    infoChronology = '';
    feedbackTitle = '';
    feedbackInfo = '';
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
    impressum = '';
    privacyPolicy = '';
}

type ContentProps = Array<keyof ContentTemplate>;

export type Content = ContentTemplate;

export const CONTENT_PROPS = Object.keys(new ContentTemplate()) as ContentProps;
