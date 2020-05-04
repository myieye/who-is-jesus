import { Content } from '../content';
import { verses } from './verses.de';
import { bibleBooks } from './bible-books.de';
import { tags } from './tags.de';
import { tagVerses } from '../references';

export const CONTENT: Content = {
    jesus: 'Jesus',
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
    sources: 'Quellen',
    order: 'Reihenfolge',
    infoAboutTitle: 'Worum geht es?',
    infoAbout: `
Jeder soll wissen, wer <span class="glory">Jesus</span> ist!
Diese Webseite ist ein hilfreiches Werkzeug um zu entdecken, was die Evangelien
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
    multipleTagSelection: 'Multi-Tag Auswahl',
    multipleTags: 'Multi-Tag',
    singleTag: 'Single-Tag',
    groupByTag: 'Nach Tag gruppieren',
    mergeParallels: 'Parallelstellen zusammenführen',
    about: 'Info',
    noVersesFound: 'Keine Verse erfüllen deine Quelle-/Tag-Filter-Kriterien.',
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
};
