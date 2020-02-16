import { TaggedVerse, BibleBook, BibleBookMap } from '../models/bible';
import { ContentService } from '../content.service';

export type VerseFilter = (verse: TaggedVerse) => boolean;

export class SourceFilter {
    key: SourceFilterKey;
    displayName: string;
    cssClass?: string;
    filter: VerseFilter;

    static forBook(book: BibleBook, key: SourceFilterKey): SourceFilter {
        return {
            key,
            displayName: book.full,
            filter: (verse) => verse.reference.book === book,
        };
    }
}

export enum SourceFilterKey {
    Jesus = 'Jesus', Matt = 'Matt', Mark = 'Mark', Luke = 'Luke', John = 'John'
}

export type SourceFilterMap = { [key in SourceFilterKey]: SourceFilter };

export const sourceFilters = (content: ContentService): SourceFilterMap => ({
    [SourceFilterKey.Jesus]: {
        displayName: content.jesus,
        cssClass: 'jesus-words',
        filter: (verse) => verse.html.indexOf('jesus-words') > -1,
        key: SourceFilterKey.Jesus,
    },
    [SourceFilterKey.Matt]: SourceFilter.forBook(content.bibleBooks.Matt, SourceFilterKey.Matt),
    [SourceFilterKey.Mark]: SourceFilter.forBook(content.bibleBooks.Mark, SourceFilterKey.Mark),
    [SourceFilterKey.Luke]: SourceFilter.forBook(content.bibleBooks.Luke, SourceFilterKey.Luke),
    [SourceFilterKey.John]: SourceFilter.forBook(content.bibleBooks.John, SourceFilterKey.John),
});

export class SourceFilterChangeEvent {
    filters: VerseFilter[];
    all: boolean;
}
