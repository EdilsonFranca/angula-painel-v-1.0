import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductModule} from '../product/product.module';
import {CardModule} from '../../../shared/components/card/card.module';
import {ProductListComponent} from './product-list.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailsModule} from '../product-details/product-details.module';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';
import {BtnNewModule} from '../../btn-new/btn-new.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ProductModule,
    ProductDetailsModule,
    NavegateMapModule,
    BtnNewModule
  ],
    declarations: [
        ProductListComponent,
        ProductsComponent,
    ]
})
export class ProductListModule { }
