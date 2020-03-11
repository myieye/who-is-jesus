import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Option, options as verseOptions, OptionsSelection } from './options';
import { QueryParamService } from '../services/query-param.service';
import { keyBy, mapValues, reduce } from 'lodash';

const OPTIONS_PARAM = 'options';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent implements OnInit {

  selectedOptions: Option[] | undefined;
  options: Option[];

  @Output() readonly optionsChange = new EventEmitter<OptionsSelection>();

  constructor(
    readonly content: ContentService,
    private readonly paramService: QueryParamService,
  ) {
    this.options = verseOptions(content);
    this.selectedOptions = this.options.filter((option) => option.default);
  }

  ngOnInit(): void {
    this.paramService.loadParams(OPTIONS_PARAM, (options) => {
      this.selectedOptions = options.map(key => this.options.find(option => option.key === key));
      this.optionsChanged(this.selectedOptions, false);
    });
  }

  optionsChanged(options: Option[], saveToUrl = true) {
    const selection = reduce(options, (result, {key}) => {
      result[key] = true;
      return result;
    }, {});

    this.optionsChange.emit(selection);

    this.paramService.saveParam(OPTIONS_PARAM, options.map(option => option.key), saveToUrl);
  }
}
