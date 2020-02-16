import { ContentService } from '../content.service';
import { TaggedVerse } from '../models/bible';

export type VerseIndexer = (verse: TaggedVerse) => number;

export interface VerseOrder {
    key: string;
    displayName: string;
    indexer: VerseIndexer;
}

export const verseOrders = (content: ContentService): VerseOrder[] => ([
    {
        key: 'Standard',
        displayName: content.standard,
        indexer: verse => verse.reference.numericReference,
    },
    {
        key: 'Chronological',
        displayName: content.chronological,
        indexer: verse => verse.reference.chronologicalIndex,
    }
]);
