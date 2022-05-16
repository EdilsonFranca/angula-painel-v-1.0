import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {OrderListModule} from './order-list/order-list.module';

  @NgModule({
      imports: [
          CommonModule,
          HttpClientModule,
          RouterModule,
          OrderListModule
      ],
  })
export class OrdersModule { }
