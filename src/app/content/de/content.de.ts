import { Content } from '../content';
import { verses } from './verses.de';
import { bibleBooks } from './bible-books.de';
import { tags } from './tags.de';

export const CONTENT: Content = {
    jesus: 'Jesus',
    all: 'Alle',
    synopticGospels: 'Synoptiker',
    standard: 'Standard',
    chronological: 'Chronologisch',
    pageTitle: 'Wer ist <span class="jesus-glory">Jesus?</span>',
    sources: 'Quellen',
    order: 'Reihenfolge',
    infoAboutTitle: 'Worum geht es?',
    infoBibleTranslationTitle: 'Bibelübersetzung',
    infoChronologyTitle: 'Chronologie',
    infoAbout: `
Jeder soll wissen, wer <span class="jesus-glory">Jesus</span> ist!
Diese Webseite ist ein hilfreiches Werkzeug um zu entdecken, was die Evangelien
(und sogar Jesus selbst) über Ihn zu sagen haben.`,
    infoBibleTranslation: `
Alle Verse werden aus der <a href="https://ngue.info/">Neuen Genfer Übersetzung</a> (NGÜ) zitiert.
Die NGÜ wurde gewählt, weil sie treu zum originalen Text und auch leicht verständlich ist.
Es finden sich neben den Bibelstellen auch Links zu <a href="https://www.biblegateway.com/">Bible Gateway</a>,
um die Verse in anderen Übersetzungen zu lesen.
<span class="big-screen-content">Beim Drüberfahren mit der Maus über einen Vers wird der Link angezeigt.</span>`,
    infoChronology: `
Die Chronologische Sortierung basiert auf <a href="http://www.lifeofchrist.com/Life/Harmony">Harmony of the Gospels</a>
von LifeofChrist.com. Dies ist schlichtweg eine Annahme, wie die Herausgeber auch auf ihrer Webseite angeben.`,
    options: 'Optionen',
    multipleTagSelection: 'Multi-Tag Auswahl',
    multipleTags: 'Multi-Tag',
    singleTag: 'Single-Tag',
    groupByTag: 'Nach Tag gruppieren',
    about: 'Info',
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
    verses,
    bibleBooks,
    tags,
    showVerseNumbers: true,
};
