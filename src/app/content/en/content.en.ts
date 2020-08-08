import { Content } from '../content';
import { verses } from './verses.en';
import { bibleBooks } from './bible-books.en';
import { tags } from './tags.en';
import { tagVerses } from '../references';
import { Language } from '../languages';

export const CONTENT: Content = {
    jesus: 'Jesus',
    languageCode: Language.EN,
    language: 'Language',
    en: 'English',
    de: 'Deutsch',
    all: 'All',
    synopticGospels: 'Synoptic Gospels',
    standard: 'Standard',
    chronological: 'Chronological',
    pageTitle: 'Who is <span class="glory">Jesus?</span>',
    pageIntro: (verseCount) => `
Explore the biblical greatness of <span class="jesus">Jesus</span> with
${verseCount} handpicked scripture passages that demonstrate
who <span class="jesus">He</span> is, what <span class="jesus">He</span> did
and what that means for <span class="primary">you</span>.`,
    optionInstructions: 'Filter and organize your search...',
    sources: 'Sources',
    order: 'Order',
    infoAboutTitle: 'About',
    infoAbout: `
Everyone should know who <span class="glory">Jesus</span> is!
This is a streamlined tool for discovering what the Gospels have to say about Him
and even what He has to say about Himself.`,
    infoBibleTranslationTitle: 'Bible Translation',
    infoBibleTranslation: `
All verses are quoted from the <a href="https://worldenglish.bible/">World English Bible</a> (WEB) translation.
The WEB was chosen, because it both aims to be true to the original text and is in the public domain.
I encourage you to read the verses in other translations as well.
For this purpose, a link to <a href="https://www.biblegateway.com/">Bible Gateway</a>
<span class="inline-icon-container"><img src="assets/bible-gateway-icon.ico"></span>
has been provided next to each Bible reference.
<span class="big-screen-content">Hover over the reference to reveal the link.</span>`,
    infoChronologyTitle: 'Chronology',
    infoChronology: `
Chronological sorting is based on <a href="http://www.lifeofchrist.com/Life/Harmony">Harmony of the Gospels</a>
from LifeofChrist.com. This is only an approximation as is indicated on their website.`,
    feedbackTitle: 'Feedback',
    feedbackInfo: `Do you have questions or ideas?
Visit my homepage at <a href="http://timhaasdyk.com/">TimHaasdyk.com</a>
or open an issue on <a href="https://github.com/myieye/who-is-jesus/">GitHub</a>.`,
    options: 'Options',
    multipleTagSelection: 'Multiple tag selection',
    multipleTags: 'Multiple tags',
    singleTag: 'Single tag',
    groupByTag: 'Group by tag',
    mergeParallels: 'Merge parallels',
    about: 'About',
    noVersesFound: 'No verses match your source/tag filter criteria.',
    searchByLanguageOrTranslation: 'Search for language or translation',
    bibleGatewayTranslations: 'Bible Gateway translations',
    bibleGatewayTranslationsDescription: 'Select the translations to use when navigating to a verse on BibleGateway.com.',
    bibleGatewayLinkDescription: 'Read other translations on BibleGateway.com',
    bibleTranslationCopyrightNotice: `
<p>World English Bible (WEB)</p>
<p>The World English Bible is not copyrighted.</p>
<p>The name "World English Bible" is trademarked.</p>`,
    bibleTranslationUnderCopyright: false,
    defaultBibleTranslationKeys: ['WEB', 'ESV', 'NIV'],
    verses: tagVerses(verses, bibleBooks, tags),
    bibleBooks,
    tags,
    showVerseNumbers: false,
    impressum: 'Impressum',
    privacyPolicy: 'Privacy policy',
    internetRequiredForLanguageVerses:
'Due to copyright, an internet connection is required to view verses in the selected language.',
    menu: 'Menu',
    light: 'Light',
    dark: 'Dark',
    getTheApp: 'Get the app',
    rateMe: 'Rate me',
};
