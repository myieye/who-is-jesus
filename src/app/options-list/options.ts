import { ContentService } from '../services/content.service';

export enum OptionKey {
    MultiTags = 'MultiTags',
    GroupByTag = 'GroupByTag',
    MergeParallels = 'MergeParallels',
    BGTranslations = 'BGTranslations',
}

export interface Option {
    key: OptionKey;
    displayName: string;
    selectedText?: string;
    deselectedText?: string;
    default?: boolean;
}

type OptionValue = boolean | string[];

export type OptionsSelection = {[key in OptionKey]?: OptionValue};

export const options = (content: ContentService): Option[] => ([
    {
        key: OptionKey.MultiTags,
        displayName: content.multipleTagSelection,
        selectedText: content.multipleTags,
        deselectedText: content.singleTag,
    },
    {
        key: OptionKey.GroupByTag,
        displayName: content.groupByTag,
        selectedText: content.groupByTag,
        default: true,
    },
    {
        key: OptionKey.MergeParallels,
        displayName: content.mergeParallels,
        selectedText: content.mergeParallels,
        default: false,
    },
]);
