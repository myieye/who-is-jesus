import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
})
export class DialogHeaderComponent {

  @Input() title: string;

  @Output() dismiss = new EventEmitter<void>();

  constructor(
    readonly modalController: ModalController,
  ) {
  }

  close(): void {
    if (this.dismiss.observers?.length) {
      this.dismiss.emit();
    } else {
      this.modalController.dismiss();
    }
  }
}
