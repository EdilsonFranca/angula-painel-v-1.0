import { NgModule } from '@angular/core';
import {ProductModule} from './product/product.module';
import {ProductListModule} from './product-list/product-list.module';
import {CommonModule} from '@angular/common';
import {ProductDetailsModule} from './product-details/product-details.module';
import {ProductFormModule} from './product-form/product-form.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        ProductModule,
        ProductFormModule,
        ProductListModule,
        ProductDetailsModule,
        CommonModule,
        ReactiveFormsModule,
    ],
})
export class ProductsModule { }
