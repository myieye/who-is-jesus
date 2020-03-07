import { Content } from '../content';
import { verses } from './verses.en';
import { bibleBooks } from './bible-books.en';
import { tags } from './tags.en';

// tslint:disable:max-line-length
export const CONTENT: Content = {
    jesus: 'Jesus',
    all: 'All',
    synopticGospels: 'Synoptic Gospels',
    standard: 'Standard',
    chronological: 'Chronological',
    pageTitle: 'Who is <span class="jesus-title jesus-words">Jesus?</span>',
    sources: 'Sources',
    order: 'Order',
    infoAboutTitle: 'About',
    infoBibleTranslationTitle: 'Bible Translation',
    infoChronologyTitle: 'Chronology',
    infoAbout: 'Everyone should know who Jesus is! This site is a streamlined tool for discovering what the Gospels have to say about Him and even what He has to say about Himself.',
    infoBibleTranslation: 'All verses are quoted from the <a href="https://worldenglish.bible/">World English Bible</a> (WEB) translation. The WEB was chosen, because it both aims to be true to the original text and is in the public domain. I encourage you to read the verses in other translations as well. For that purpose I\'ve provided links to <a href="https://www.biblegateway.com/">Bible Gateway</a>. By hovering over a verse (not necessary on smaller devices) you\'ll find a link that will show the verse in several other translations.',
    infoChronology: 'Chronological sorting is based on <a href="http://www.lifeofchrist.com/Life/Harmony">Harmony of the Gospels</a> from <em>LifeofChrist.com</em>. This is of course only an approximation as is indicated on their website.',
    verses,
    bibleBooks,
    tags,
};
