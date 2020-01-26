import { TaggedVerse } from '../verses';
import { BibleBook } from '../bible';
import { bibleBooks } from '../bible-books.en';

export type VerseFilter = (verse: TaggedVerse) => boolean;

export class SourceFilter {
    displayName: string;
    cssClass?: string;
    filter: VerseFilter;

    static forBook(book: BibleBook): SourceFilter {
        return {
            displayName: book.full,
            filter: (verse) => verse.reference.book === book,
        };
    }
}

export enum SourceFilterKey {
    Jesus = 'Jesus', Matthew = 'Matthew', Mark = 'Mark', Luke = 'Luke', John = 'John'
}

export type SourceFilterMap = { [key in SourceFilterKey]: SourceFilter };

export const sourceFilters: SourceFilterMap = {
    [SourceFilterKey.Jesus]: {
        displayName: 'Jesus',
        cssClass: 'jesus-words',
        filter: (verse) => verse.html.indexOf('jesus-words') > -1
    },
    [SourceFilterKey.Matthew]: SourceFilter.forBook(bibleBooks.Matt),
    [SourceFilterKey.Mark]: SourceFilter.forBook(bibleBooks.Mark),
    [SourceFilterKey.Luke]: SourceFilter.forBook(bibleBooks.Luke),
    [SourceFilterKey.John]: SourceFilter.forBook(bibleBooks.John),
};
