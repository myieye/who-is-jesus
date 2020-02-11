import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { TaggedVerse, BibleBookMap } from './models/bible';
import { verses as versesEN } from './content/en/verses.en';
import { offLimits, VerseTagMap } from './models/tags';
import { bibleBooks as bibleBooksEN } from './content/en/bible-books.en';
import { tags as tagsEN } from './content/en/tags.en';

@Injectable({ providedIn: 'root' })
export class ContentService {

    get jesus(): string {
        return 'Jesus';
    }

    get all(): string {
        return 'All';
    }

    get synopticGospels(): string {
        return 'Synoptic Gospels';
    }

    get standard(): string {
        return 'Standard';
    }

    get chronological(): string {
        return 'Chronological';
    }

    constructor(@Inject(LOCALE_ID) private readonly local: string) {
        console.log('Locale: ', local);
    }

    get verses(): TaggedVerse[] {
        return versesEN.filter(verse => verse.tags.some(tag => !offLimits.includes(tag)));
    }

    get bibleBooks(): BibleBookMap {
        return bibleBooksEN;
    }

    get tags(): VerseTagMap {
        return tagsEN;
    }
}
