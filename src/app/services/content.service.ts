import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { Content, CONTENT_PROPS, ContentTemplate } from '../content/content';
import { DEFAULT_LANGUAGE } from '../content/languages';

@Injectable()
export class ContentService extends ContentTemplate implements Content {

    constructor(
        private readonly languageService: LanguageService,
    ) {
        super();
    }

    async initPropsDynamically(): Promise<ContentService> {

        const currLang = this.languageService.language;

        const defaultLanguageContent = await import(`../content/${DEFAULT_LANGUAGE}/content.${DEFAULT_LANGUAGE}`);
        const currLanguageContent = currLang === DEFAULT_LANGUAGE
            ? defaultLanguageContent : await import(`../content/${currLang}/content.${currLang}`);

        for (const prop of CONTENT_PROPS) {
            // @ts-ignore
            this[prop] = currLanguageContent.CONTENT[prop] || defaultLanguageContent.CONTENT[prop];
        }

        return this;
    }
}
