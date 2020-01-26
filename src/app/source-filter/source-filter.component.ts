import { Component, Output, EventEmitter } from '@angular/core';
import { sourceFilters, SourceFilter, VerseFilter, SourceFilterKey } from './source-filters';
import { isNil } from 'lodash';

@Component({
  selector: 'app-source-filter',
  templateUrl: './source-filter.component.html',
  styleUrls: ['./source-filter.component.scss']
})
export class SourceFilterComponent {

  @Output() readonly filterChange = new EventEmitter<Array<VerseFilter>>();

  filters = Object.values(sourceFilters);

  getTriggerText(filters?: SourceFilter[] | undefined): string {
    if (isNil(filters) || filters.length === 0 || filters.length === Object.keys(sourceFilters).length ||
      (filters.includes(sourceFilters.Matthew) && filters.includes(sourceFilters.Mark) &&
        filters.includes(sourceFilters.Luke) && filters.includes(sourceFilters.John))) {
      return 'All';
    }

    const items: string[] = [];

    if (filters.includes(sourceFilters.Jesus)) {
      items.push(SourceFilterKey.Jesus);
    }

    if (filters.includes(sourceFilters.Matthew) && filters.includes(sourceFilters.Mark) && filters.includes(sourceFilters.Luke)) {
      items.push('Synoptic Gospels');
    } else {
      if (filters.includes(sourceFilters.Matthew)) {
        items.push(SourceFilterKey.Matthew);
      }
      if (filters.includes(sourceFilters.Mark)) {
        items.push(SourceFilterKey.Mark);
      }
      if (filters.includes(sourceFilters.Luke)) {
        items.push(SourceFilterKey.Luke);
      }
    }

    if (filters.includes(sourceFilters.John)) {
      items.push(SourceFilterKey.John);
    }

    return items.join(', ');
  }

  filterSelectionChanged(filters: SourceFilter[]): void {
    const verseFilters = filters.map(sourceFilter => sourceFilter.filter);
    this.filterChange.emit(verseFilters);
  }
}
