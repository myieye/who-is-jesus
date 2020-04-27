import { ContentService } from '../services/content.service';
import { TaggedVerse } from '../models/bible';

export enum VerseOrderKey {
    Standard = 'Standard',
    Chronological = 'Chronological',
}

export type VerseIndexer = (verse: TaggedVerse) => number;

export interface VerseOrder {
    key: VerseOrderKey;
    displayName: string;
    indexer: VerseIndexer;
}

export const verseOrders = (content: ContentService): VerseOrder[] => ([
    {
        key: VerseOrderKey.Standard,
        displayName: content.standard,
        indexer: verse => verse.reference.numericReference,
    },
    {
        key: VerseOrderKey.Chronological,
        displayName: content.chronological,
        indexer: verse => verse.reference.chronologicalIndex,
    }
]);
