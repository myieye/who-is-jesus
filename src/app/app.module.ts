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
import { PageFooterComponent } from './page-footer/page-footer.component';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { AppRouterComponent } from './app-router.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OptionsListComponent } from './options-list/options-list.component';
import { TaggedVerseGroupHeaderComponent } from './tagged-verse-group-header/tagged-verse-group-header.component';
import { BibleTranslationsDialogComponent } from './dialogs/bible-translations-dialog/bible-translations-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TagInstructionsContentComponent } from './content/tag-instructions-content.component';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DialogHeaderComponent } from './dialogs/dialog-header/dialog-header.component';
import { ThemeDetection } from '@ionic-native/theme-detection/ngx';

@NgModule({
  declarations: [
    AppComponent,
    AppRouterComponent,
    VerseComponent,
    TagListComponent,
    SourceFilterComponent,
    VerseOrderSelectComponent,
    PageFooterComponent,
    InfoDialogComponent,
    AppWrapperComponent,
    LanguagePickerComponent,
    OptionsListComponent,
    TaggedVerseGroupHeaderComponent,
    BibleTranslationsDialogComponent,
    TagInstructionsContentComponent,
    DialogHeaderComponent,
  ],
  imports: [
    IonicModule.forRoot(),
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
    MatListModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    { provide: Window, useValue: window },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StatusBar,
    ThemeDetection,
  ],
  bootstrap: [AppRouterComponent],
})
export class AppModule { }
