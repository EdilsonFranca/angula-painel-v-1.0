import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CategoryModule} from '../category/category.module';
import {CategoryListComponent} from './category-list.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProductDetailsModule} from '../../products/product-details/product-details.module';
import {ProductListModule} from '../../products/product-list/product-list.module';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';
import {BtnNewModule} from '../../btn-new/btn-new.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CategoryModule,
    ProductDetailsModule,
    ProductListModule,
    NavegateMapModule,
    BtnNewModule
  ],
  declarations: [
    CategoryListComponent,
    CategoriesComponent,
  ]
})
export class CategoryListModule { }
