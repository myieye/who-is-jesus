import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { isNil, isEqual } from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { LanguageService } from '../services/language.service';
import { ContentService } from '../services/content.service';
import { DebugSettings } from '../../debug-settings';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
  providers: [LanguageService, ContentService],
})
export class AppWrapperComponent {

  enabled = false;
  loading = true;

  private previousParams: ParamMap;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly ref: ChangeDetectorRef,
    private readonly snackBar: MatSnackBar,
    private readonly languageService: LanguageService,
    private readonly contentService: ContentService,
  ) {
    this.route.paramMap.subscribe((paramMap) => this.onParamsChanged(paramMap));
  }

  private onParamsChanged(paramMap: ParamMap): void {

    this.languageService.setLanguage(paramMap.get('lang'));

    if (isNil(this.previousParams) || !isEqual(this.previousParams, paramMap)) {

      // Perform a brute force recreation of the app
      let contentIniter = this.contentService.initPropsDynamically();

      if (this.enabled) {
        this.loading = true;
        this.enabled = false;
        this.ref.detectChanges();
        contentIniter = contentIniter.then(() => new Promise((resolve) => setTimeout(resolve, 500)));
      }

      contentIniter.then(() => {
        this.enabled = true;
        this.ref.detectChanges();
        this.loading = false;

        if (DebugSettings.reloadNotification) {
          console.log('Reloaded with params:', paramMap);
          this.snackBar.open('Reloaded', undefined, { duration: 3000 });
        }
      });
    }

    this.previousParams = paramMap;
  }
}
