import { TaggedVerse } from '../verses';
import { BibleBook } from '../bible';

export type VerseFilter = (verse: TaggedVerse) => boolean;

export class SourceFilter {
    displayName: string;
    cssClass?: string;
    filter: VerseFilter;

    static forBook(book: BibleBook): SourceFilter {
        return {
            displayName: book.full,
            filter: (verse) => verse.reference.book === book,
        }
    }
}