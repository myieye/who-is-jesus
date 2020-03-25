import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Option, options as verseOptions, OptionsSelection, OptionKey } from './options';
import { QueryParamService } from '../services/query-param.service';
import { reduce, isNil, isEqual, sortBy } from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { BibleTranslationsDialogComponent } from '../bible-translations-dialog/bible-translations-dialog.component';
import { first } from 'rxjs/operators';
import { haveSameItems } from 'src/utils/array-utils';

const OPTIONS_PARAM = 'options';
const KEY_VALUE_SEP = ':';
const VALUE_SEP = ',';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsListComponent implements OnInit {

  selectedOptions: Option[] = [];
  options: Option[] = verseOptions(this.content);
  private bgTranslations: string[] = this.content.defaultBibleTranslationKeys;

  @Output() readonly optionsChange = new EventEmitter<OptionsSelection>();

  optionsTriggerText: string;

  constructor(
    readonly content: ContentService,
    private readonly paramService: QueryParamService,
    private readonly dialog: MatDialog,
  ) {
    this.selectedOptions = this.options.filter((option) => option.default);
  }

  ngOnInit(): void {
    this.paramService.loadParams(OPTIONS_PARAM, (urlOptions) => {
      urlOptions.forEach((urlOption) => {
        const [key, value] = urlOption.split(KEY_VALUE_SEP);

        if (key === OptionKey.BGTranslations) {
          this.bgTranslations = value.split(VALUE_SEP);
        } else {
          urlOptions[key] = value === 'true';
        }
      });

      this.selectedOptions = this.options.filter((option) =>
        isNil(urlOptions[option.key]) ? option.default : urlOptions[option.key]);
    });

    this.optionsChanged(this.selectedOptions, false);
  }

  optionsChanged(options: Option[], saveToUrl = true) {
    this.selectedOptions = options;

    const selection = reduce(options, (result, { key }) => {
      result[key] = true;
      return result;
    }, {});

    selection[OptionKey.BGTranslations] = this.bgTranslations;
    this.optionsChange.emit(selection);

    const urlOptions = this.options
      .filter((option) => options.includes(option) ? !option.default : option.default)
      .map((option) => `${option.key}${KEY_VALUE_SEP}${options.includes(option) ? true : false}`);

    if (!haveSameItems(this.bgTranslations, this.content.defaultBibleTranslationKeys)) {
      urlOptions.push(`${OptionKey.BGTranslations}${KEY_VALUE_SEP}${this.bgTranslations.join(VALUE_SEP)}`);
    }

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
        bibles: this.bgTranslations,
      },
      width: '750px',
    }).afterClosed().pipe(first()).subscribe(
      (selectedTranslations) => this.updateSelectedTranslations(selectedTranslations));
  }

  private updateSelectedTranslations(selectedTranslations: string[]): void {
    if (!haveSameItems(this.bgTranslations, selectedTranslations)) {
      this.bgTranslations = selectedTranslations.length
        ? selectedTranslations : this.content.defaultBibleTranslationKeys;
      this.optionsChanged(this.selectedOptions);
    }
  }
}
