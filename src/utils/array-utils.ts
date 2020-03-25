import { isEqual, sortBy } from 'lodash';

export const haveSameItems = <T>(listA: Array<T>, listB: Array<T>, ignoreOrder = false): boolean => {
    return ignoreOrder ? isEqual(sortBy(listA), sortBy(listB)) : isEqual(listA, listB);
};
