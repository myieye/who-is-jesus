import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { VerseOrder, VerseIndexer, verseOrders } from './verse-orders';
import { MatSelectChange, MatSelect } from '@angular/material/select';
import { first } from 'lodash';

@Component({
  selector: 'app-verse-order-select',
  templateUrl: './verse-order-select.component.html',
  styleUrls: ['./verse-order-select.component.scss']
})
export class VerseOrderSelectComponent implements OnInit {

  @Output() readonly orderChange = new EventEmitter<VerseIndexer>();

  @ViewChild(MatSelect, { static: true }) select: MatSelect;

  orders = verseOrders;

  ngOnInit(): void {
    this.select.value = first(this.orders);
  }

  orderSelectionChanged(verseOrder: VerseOrder): void {
    this.orderChange.emit(verseOrder.indexer);
  }
}
