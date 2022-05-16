import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductModule} from '../product/product.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VMessageModule} from '../../../shared/components/vmessage/vmessage.module';
import {ProductDetailsComponent} from './product-details.component';
import {BtnReturnModule} from '../../btn-return/btn-return.module';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
    BtnReturnModule,
    NavegateMapModule,
  ],
    declarations: [
        ProductDetailsComponent,
    ]
})
export class ProductDetailsModule { }
