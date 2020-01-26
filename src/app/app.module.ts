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
import { SourceFilterComponent } from './source-filter/source-filter.component';
import { VerseOrderSelectComponent } from './verse-order-select/verse-order-select.component';

@NgModule({
  declarations: [
    AppComponent,
    VerseComponent,
    TagListComponent,
    SourceFilterComponent,
    VerseOrderSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
