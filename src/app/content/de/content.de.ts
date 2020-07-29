import { Content } from '../content';
import { germanVerses } from './verses.de';
import { bibleBooks } from './bible-books.de';
import { tags } from './tags.de';
import { tagVerses } from '../references';
import { Language } from '../languages';
import { languageConfigs } from '../mobile-language-configs.__private';

const language = Language.DE;
const verses = languageConfigs[language]?.getter() ?? germanVerses;

export const CONTENT: Content = {
    jesus: 'Jesus',
    languageCode: language,
    language: 'Sprache',
    en: 'English',
    de: 'Deutsch',
    all: 'Alle',
    synopticGospels: 'Synoptiker',
    standard: 'Standard',
    chronological: 'Chronologisch',
    pageTitle: 'Wer ist <span class="glory">Jesus?</span>',
    pageIntro: (verseCount) => `
Entdecke die biblische Größe <span class="jesus">Jesu</span> anhand von ${verseCount}
ausgewählten Bibelabschnitten, die zeigen
wer <span class="jesus">Er</span> ist, was <span class="jesus">Er</span> tat
und was das für <span class="primary">dich</span> bedeutet.`,
    optionInstructions: 'Filtere und organisiere deine Suche...',
    sources: 'Quellen',
    order: 'Reihenfolge',
    infoAboutTitle: 'Worum geht es?',
    infoAbout: `
Jeder soll wissen, wer <span class="glory">Jesus</span> ist!
Dies ist ein hilfreiches Tool um zu entdecken, was die Evangelien
(und sogar Jesus selbst) über Ihn zu sagen haben.`,
    infoBibleTranslationTitle: 'Bibelübersetzung',
    infoBibleTranslation: `
Alle Verse werden aus der <a href="https://ngue.info/">Neuen Genfer Übersetzung</a> (NGÜ) zitiert.
Die NGÜ wurde gewählt, weil sie treu zum originalen Text und auch leicht verständlich ist.
Es finden sich neben den Bibelstellen auch Links zu <a href="https://www.biblegateway.com/">Bible Gateway</a>
<span class="inline-icon-container"><img src="assets/bible-gateway-icon.ico"></span>,
um die Verse in anderen Übersetzungen zu lesen.
<span class="big-screen-content">Beim Drüberfahren mit der Maus über eine Bibelstelle wird der Link angezeigt.</span>`,
    infoChronologyTitle: 'Chronologie',
    infoChronology: `
Die Chronologische Sortierung basiert auf <a href="http://www.lifeofchrist.com/Life/Harmony">Harmony of the Gospels</a>
von LifeofChrist.com. Dies ist schlichtweg eine Annahme, wie die Herausgeber auch auf ihrer Webseite angeben.`,
feedbackTitle: 'Feedback',
feedbackInfo: `Hast du Fragen oder Ideen?
Besuche meine Homepage at <a href="http://timhaasdyk.com/">TimHaasdyk.com</a>
oder erstell ein Issue auf <a href="https://github.com/myieye/who-is-jesus/">GitHub</a>.`,
    options: 'Optionen',
    multipleTagSelection: 'Multi-Stichwort-Auswahl',
    multipleTags: 'Multi-Auswahl',
    singleTag: 'Einzel-Auswahl',
    groupByTag: 'Stichwort-Gruppierung',
    mergeParallels: 'Parallelstellen zusammenführen',
    about: 'Info',
    noVersesFound: 'Keine Verse erfüllen deine Quelle-/Stichwort-Filter-Kriterien.',
    searchByLanguageOrTranslation: 'Nach Sprache oder Übersetzung suchen',
    bibleGatewayTranslations: 'Bible Gateway Übersetzungen',
    bibleGatewayTranslationsDescription: 'Wähle Übersetzungen für BibleGateway.com aus.',
    bibleGatewayLinkDescription: 'Andere Übersetzungen auf BibleGateway.com lesen',
    bibleTranslationCopyrightNotice: `
<p>Bibeltext der Neuen Genfer Übersetzung — Neues Testament und Psalmen</p>
<p>Copyright © 2011 Genfer Bibelgesellschaft</p>
<p>Wiedergegeben mit freundlicher Genehmigung. Alle Rechte vorbehalten.</p>
`,
    bibleTranslationUnderCopyright: true,
    defaultBibleTranslationKeys: ['NGU-DE', 'SCH2000', 'HOF'],
    verses: tagVerses(verses, bibleBooks, tags),
    bibleBooks,
    tags,
    showVerseNumbers: true,
    impressum: 'Impressum',
    privacyPolicy: 'Datenschutzerklärung',
    internetRequiredForLanguageVerses:
'Wegen Copyright, ist eine Internet-Verbindng erforderlich, um Verse in der ausgewählten Sprache zu lesen.',
    menu: 'Menü',
    light: 'Hell',
    dark: 'Dunkel',
};
