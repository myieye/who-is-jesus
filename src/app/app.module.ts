import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerseComponent } from './verse/verse.component';
import { TagComponent } from './tags/tag/tag.component';
import { TagListComponent } from './tags/tag-list/tag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VerseComponent,
    TagComponent,
    TagListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
