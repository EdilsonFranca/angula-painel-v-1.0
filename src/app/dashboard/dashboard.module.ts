import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {ProductsModule} from './products/products.module';
import {AlertModule} from '../shared/components/alert/alert.module';
import {CategoriesModule} from './categories/categories.module';
import {AdditionalModule} from './additional/additional.module';
import {NavegateMapModule} from './navegate-map/navegate-map.module';
import {OrdersModule} from './orders/orders.module';
import {DashboardDataModule} from './data/dashboard-data/dashboard-data.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule,
    DashboardRoutingModule,
    AlertModule,
    CategoriesModule,
    AdditionalModule,
    NavegateMapModule,
    OrdersModule,
    DashboardDataModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
