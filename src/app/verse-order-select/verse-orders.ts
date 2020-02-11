import { ContentService } from '../content.service';
import { TaggedVerse } from '../models/bible';

export type VerseIndexer = (verse: TaggedVerse) => number;

export interface VerseOrder {
    displayName: string;
    indexer: VerseIndexer;
}

export const verseOrders = (content: ContentService): VerseOrder[] => ([
    {
        displayName: content.standard,
        indexer: verse => verse.reference.numericReference,
    },
    {
        displayName: content.chronological,
        indexer: verse => verse.reference.chronologicalIndex,
    }
]);
