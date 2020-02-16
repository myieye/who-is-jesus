import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { VerseOrder, VerseIndexer, verseOrders } from './verse-orders';
import { MatSelect } from '@angular/material/select';
import { first } from 'lodash';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-verse-order-select',
  templateUrl: './verse-order-select.component.html',
  styleUrls: ['./verse-order-select.component.scss']
})
export class VerseOrderSelectComponent implements OnInit {

  @Output() readonly orderChange = new EventEmitter<VerseIndexer>();

  @ViewChild(MatSelect, { static: true }) select: MatSelect;

  orders: VerseOrder[];

  constructor(private readonly content: ContentService) {
  }

  ngOnInit(): void {
    this.orders = verseOrders(this.content);
    this.select.value = first(this.orders);
    this.orderSelectionChanged(this.select.value);
  }

  orderSelectionChanged(verseOrder: VerseOrder): void {
    this.orderChange.emit(verseOrder.indexer);
  }
}
