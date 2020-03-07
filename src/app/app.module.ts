import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerseComponent } from './verse/verse.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SourceFilterComponent } from './source-filter/source-filter.component';
import { VerseOrderSelectComponent } from './verse-order-select/verse-order-select.component';
import { PageActionsComponent } from './page-actions/page-actions.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { AppRouterComponent } from './app-router.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AppRouterComponent,
    VerseComponent,
    TagListComponent,
    SourceFilterComponent,
    VerseOrderSelectComponent,
    PageActionsComponent,
    InfoDialogComponent,
    AppWrapperComponent,
    LanguagePickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppRouterComponent],
})
export class AppModule { }