import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VMessageModule} from '../../../shared/components/vmessage/vmessage.module';
import {ProductFormComponent} from './product-form.component';
import {ProductModule} from '../product/product.module';
import {BtnReturnModule} from '../../btn-return/btn-return.module';
import {ProductDetailsModule} from '../product-details/product-details.module';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        ProductModule,
        BtnReturnModule,
        ProductDetailsModule,
        NavegateMapModule,
    ],
  exports: [
    ProductFormComponent
  ],
    declarations: [ProductFormComponent]
})
export class ProductFormModule { }
