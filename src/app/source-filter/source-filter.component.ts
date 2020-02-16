import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { sourceFilters, SourceFilter, VerseFilter, SourceFilterMap, SourceFilterChangeEvent } from './source-filters';
import { isNil } from 'lodash';
import { ContentService } from '../content.service';
import { skip, take } from 'rxjs/operators';

const FILTER_PARAM = 'filter';

@Component({
  selector: 'app-source-filter',
  templateUrl: './source-filter.component.html',
  styleUrls: ['./source-filter.component.scss']
})
export class SourceFilterComponent {

  @Output() readonly filterChange = new EventEmitter<SourceFilterChangeEvent>();

  selectedFilters: SourceFilter[] | undefined;

  sourceFilterMap: SourceFilterMap;
  filters: SourceFilter[];
  jesus: string;

  constructor(private readonly content: ContentService,
              private readonly router: Router) {
    this.sourceFilterMap = sourceFilters(content);
    this.filters = Object.values(this.sourceFilterMap);
    this.jesus = content.jesus;

    this.router.routerState.root.queryParamMap.pipe(skip(1), take(1))
      .subscribe(params => {
        this.selectedFilters = params.getAll(FILTER_PARAM).map(key => this.sourceFilterMap[key]);
        this.filterSelectionChanged(this.selectedFilters);
      });
  }

  getSelectedSources(filters?: SourceFilter[] | undefined): string[] {
    if (this.isAllFilters(filters)) {
      return [this.content.all];
    }

    const items: string[] = [];

    if (filters.includes(this.sourceFilterMap.Matt) &&
      filters.includes(this.sourceFilterMap.Mark) &&
      filters.includes(this.sourceFilterMap.Luke)) {
      items.push(this.content.synopticGospels);

      if (filters.includes(this.sourceFilterMap.Jesus)) {
        items.push(this.sourceFilterMap.Jesus.displayName);
      }

      if (filters.includes(this.sourceFilterMap.John)) {
        items.push(this.sourceFilterMap.John.displayName);
      }
    } else {
      filters.forEach(filter => items.push(filter.displayName));
    }

    return items;
  }

  filterSelectionChanged(filters: SourceFilter[]): void {
    const verseFilters = filters.map(sourceFilter => sourceFilter.filter);
    this.filterChange.emit({
      filters: verseFilters,
      all: this.isAllFilters(filters),
    });

    this.router.navigate([''], {
      queryParams: { [FILTER_PARAM]: filters.map(sourceFilter => sourceFilter.key) }
    });
  }

  private isAllFilters(filters: SourceFilter[]): boolean {
    return isNil(filters) || filters.length === 0 ||
      filters.length === Object.keys(sourceFilters).length ||
      (filters.includes(this.sourceFilterMap.Matt) && filters.includes(this.sourceFilterMap.Mark) &&
        filters.includes(this.sourceFilterMap.Luke) && filters.includes(this.sourceFilterMap.John));
  }
}
