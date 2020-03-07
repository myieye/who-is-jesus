import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { VerseOrder, VerseIndexer, verseOrders } from './verse-orders';
import { MatSelect } from '@angular/material/select';
import { first, isNil } from 'lodash';
import { ContentService } from '../services/content.service';
import { Router } from '@angular/router';
import { skip, take, takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';
import { QueryParamService } from '../services/query-param.service';

const ORDER_PARAM = 'order';

@Component({
  selector: 'app-verse-order-select',
  templateUrl: './verse-order-select.component.html',
  styleUrls: ['./verse-order-select.component.scss']
})
export class VerseOrderSelectComponent implements OnInit {

  @Output() readonly orderChange = new EventEmitter<VerseIndexer>();

  @ViewChild(MatSelect, { static: true }) select: MatSelect;

  orders: VerseOrder[];

  constructor(
    readonly content: ContentService,
    private readonly paramService: QueryParamService) {
  }

  ngOnInit(): void {
    this.orders = verseOrders(this.content);
    this.paramService.loadParam(ORDER_PARAM, (order) => {
      this.setOrder(this.orders.find(o => o.key === order));
    });
    if (isNil(this.select.value)) {
      this.setOrder(first(this.orders));
    }
  }

  orderSelectionChanged(verseOrder: VerseOrder, saveToUrl = true): void {
    this.orderChange.emit(verseOrder.indexer);
    this.paramService.saveParam(ORDER_PARAM, verseOrder.key, saveToUrl);
  }

  private setOrder(order: VerseOrder): void {
    if (!isNil(order) && this.select.value !== order) {
      this.select.value = order;
      this.orderSelectionChanged(order, false);
    }
  }
}
