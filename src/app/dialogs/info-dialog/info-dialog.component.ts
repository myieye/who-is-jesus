import { Component, Inject, Optional, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent {

  @Input() content: ContentService;

}
