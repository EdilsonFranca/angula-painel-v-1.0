import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';
import {OrderListComponent} from './order-list.component';
import {OrdersComponent} from './orders/orders.component';
import {OrderComponent} from '../order/order.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavegateMapModule,
  ],
  declarations: [
    OrderListComponent,
    OrdersComponent,
    OrderComponent,
  ]
})
export class OrderListModule { }
