import { Component, Output, EventEmitter } from '@angular/core';
import { sourceFilters, SourceFilter, VerseFilter, SourceFilterKey, SourceFilterMap } from './source-filters';
import { isNil } from 'lodash';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-source-filter',
  templateUrl: './source-filter.component.html',
  styleUrls: ['./source-filter.component.scss']
})
export class SourceFilterComponent {

  @Output() readonly filterChange = new EventEmitter<Array<VerseFilter>>();

  sourceFilterMap: SourceFilterMap;
  filters: SourceFilter[];


  constructor(private readonly content: ContentService) {
    this.sourceFilterMap = sourceFilters(content);
    this.filters = Object.values(this.sourceFilterMap);
  }

  getTriggerText(filters?: SourceFilter[] | undefined): string {
    if (isNil(filters) || filters.length === 0 || filters.length === Object.keys(sourceFilters).length ||
      (filters.includes(this.sourceFilterMap.Matthew) && filters.includes(this.sourceFilterMap.Mark) &&
        filters.includes(this.sourceFilterMap.Luke) && filters.includes(this.sourceFilterMap.John))) {
      return this.content.all;
    }

    const items: string[] = [];

    if (filters.includes(this.sourceFilterMap.Jesus)) {
      items.push(SourceFilterKey.Jesus);
    }

    if (filters.includes(this.sourceFilterMap.Matthew) &&
      filters.includes(this.sourceFilterMap.Mark) &&
      filters.includes(this.sourceFilterMap.Luke)) {
      items.push(this.content.synopticGospels);
    } else {
      if (filters.includes(this.sourceFilterMap.Matthew)) {
        items.push(SourceFilterKey.Matthew);
      }
      if (filters.includes(this.sourceFilterMap.Mark)) {
        items.push(SourceFilterKey.Mark);
      }
      if (filters.includes(this.sourceFilterMap.Luke)) {
        items.push(SourceFilterKey.Luke);
      }
    }

    if (filters.includes(this.sourceFilterMap.John)) {
      items.push(SourceFilterKey.John);
    }

    return items.join(', ');
  }

  filterSelectionChanged(filters: SourceFilter[]): void {
    const verseFilters = filters.map(sourceFilter => sourceFilter.filter);
    this.filterChange.emit(verseFilters);
  }
}
