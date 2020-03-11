import { ContentService } from '../services/content.service';

export enum OptionKey { MultiTags = 'MultiTags' }

export interface Option {
    key: OptionKey;
    displayName: string;
    selectedText?: string;
    deselectedText?: string;
    default?: boolean;
}

export type OptionsSelection = {[key in OptionKey]?: boolean};

export const options = (content: ContentService): Option[] => ([
    {
        key: OptionKey.MultiTags,
        displayName: content.multipleTagSelection,
        selectedText: content.multipleTags,
        deselectedText: content.singleTag,
    },
]);
