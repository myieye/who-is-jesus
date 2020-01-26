import { TaggedVerse } from '../verses';

export type VerseIndexer = (verse: TaggedVerse) => number;

export interface VerseOrder {
    displayName: string;
    indexer: VerseIndexer;
}

export const verseOrders: VerseOrder[] = [
    {
        displayName: 'Standard',
        indexer: verse => verse.reference.numericReference,
    },
    {
        displayName: 'Chronological',
        indexer: verse => verse.reference.chronologicalIndex,
    }
];
