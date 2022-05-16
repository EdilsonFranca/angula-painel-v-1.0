import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductListResolver} from './products/product-list/product-list.resolver';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {ProductFormComponent} from './products/product-form/product-form.component';
import {CategoryListResolver} from './categories/category-list/category-list.resolver';
import {CategoryListComponent} from './categories/category-list/category-list.component';
import {CategoryFormComponent} from './categories/category-form/category-form.component';
import {AdditionalListComponent} from './additional/additional-list/additional-list.component';
import {AdditionalListResolver} from './additional/additional-list/additional-list.resolver';
import {AdditionalFormComponent} from './additional/additional-form/additional-form.component';
import {CategoryDetailsComponent} from './categories/category-details/category-details.component';
import {OrderListComponent} from './orders/order-list/order-list.component';
import {OrderListResolver} from './orders/order-list/order-list.resolver';
import {DashboardDataComponent} from './data/dashboard-data/dashboard-data.component';
import {DashboardDataResolver} from './data/dashboard-data/dashboard-data.resolver';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardDataComponent,
        resolve: {
          data: DashboardDataResolver
        },
      },
      {
        path: 'product',
        component: ProductListComponent,
        resolve: {
          products: ProductListResolver
        },
      },
      {
        path: 'product/form',
        component: ProductFormComponent,
        resolve: {
          categories: CategoryListResolver
        },
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
        resolve: {
          categories: CategoryListResolver
        },
      },
      {
        path: 'category',
        component: CategoryListComponent,
        resolve: {
          categories: CategoryListResolver
        },
      },
      {
        path: 'category/form',
        component: CategoryFormComponent,
      },
      {
        path: 'category/:id',
        component: CategoryDetailsComponent,
        resolve: {
          additional: AdditionalListResolver
        },
      },
      {
        path: 'additional',
        component: AdditionalListComponent,
        resolve: {
          additional: AdditionalListResolver
        },
      },
      {
        path: 'additional/form',
        component: AdditionalFormComponent,
      },
      {
        path: 'order',
        component: OrderListComponent,
        resolve: {
          orders: OrderListResolver
        },
      },

    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class DashboardRoutingModule { }

