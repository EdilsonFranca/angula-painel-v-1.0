import { Component, Input } from '@angular/core';
import {Order} from '../../order/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent {

  constructor(
  ) {}

  @Input() orders: Order[] = [];
}
