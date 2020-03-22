import { Component, OnInit, Inject } from '@angular/core';
import { ContentService } from '../services/content.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html'
})
export class InfoDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly content: ContentService,
  ) {
  }

  ngOnInit() {
  }

}
