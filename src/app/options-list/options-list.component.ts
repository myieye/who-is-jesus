import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Option, options as verseOptions, OptionsSelection } from './options';
import { QueryParamService } from '../services/query-param.service';
import { reduce, isNil } from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { BibleTranslationsDialogComponent } from '../bible-translations-dialog/bible-translations-dialog.component';
import { first } from 'rxjs/operators';

const OPTIONS_PARAM = 'options';
const KEY_VALUE_SEP = ':';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsListComponent implements OnInit {

  selectedOptions: Option[] = [];
  options: Option[];

  @Output() readonly optionsChange = new EventEmitter<OptionsSelection>();

  optionsTriggerText: string;

  constructor(
    readonly content: ContentService,
    private readonly paramService: QueryParamService,
    private readonly dialog: MatDialog,
  ) {
    this.options = verseOptions(content);
    this.selectedOptions = this.options.filter((option) => option.default);
  }

  ngOnInit(): void {
    this.paramService.loadParams(OPTIONS_PARAM, (urlOptions) => {
      urlOptions.forEach((urlOption) => {
        const [key, value] = urlOption.split(KEY_VALUE_SEP);
        urlOptions[key] = value === 'true';
      });

      this.selectedOptions = this.options.filter((option) =>
        isNil(urlOptions[option.key]) ? option.default : urlOptions[option.key]);
    });

    this.optionsChanged(this.selectedOptions, false);
  }

  optionsChanged(options: Option[], saveToUrl = true) {
    const selection = reduce(options, (result, { key }) => {
      result[key] = true;
      return result;
    }, {});

    this.optionsChange.emit(selection);

    const urlOptions = this.options
      .filter((option) => options.includes(option) ? !option.default : option.default)
      .map((option) => `${option.key}${KEY_VALUE_SEP}${options.includes(option) ? true : false}`);

    this.paramService.saveParam(OPTIONS_PARAM, urlOptions, saveToUrl);

    this.optionsTriggerText = this.options
      .map((option) => options.includes(option) ? option.selectedText : option.deselectedText)
      .filter((optionText) => !isNil(optionText))
      .join(', ');
  }

  bibleTranslationsClicked(): void {
    this.dialog.open(BibleTranslationsDialogComponent, {
      data: {
        content: this.content,
      },
      width: "750px",
    }).afterClosed().pipe(first()).subscribe((selectedTranslations) => this.updateSelectedTranslations(selectedTranslations));
  }

  private updateSelectedTranslations(selectedTranslations: string[]): void {
    console.log(selectedTranslations);
  }
}
