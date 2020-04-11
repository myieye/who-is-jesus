import { Component } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent {

  constructor(
    readonly content: ContentService,
  ) { }
}
