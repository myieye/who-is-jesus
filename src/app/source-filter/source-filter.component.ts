import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SourceFilter, VerseFilter } from './source-filters';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-source-filter',
  templateUrl: './source-filter.component.html',
  styleUrls: ['./source-filter.component.scss']
})
export class SourceFilterComponent {

  @Input() filters: SourceFilter[];
  @Output() readonly filterChange = new EventEmitter<Array<VerseFilter>>();

  filterSelectionChanged(selectChange: MatSelectChange): void {
    const sourceFilters = selectChange.value as SourceFilter[];
    const verseFilters = sourceFilters.map(sourceFilter => sourceFilter.filter);
    this.filterChange.emit(verseFilters);
  }
}
