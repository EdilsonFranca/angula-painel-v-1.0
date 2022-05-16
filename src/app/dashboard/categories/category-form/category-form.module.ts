import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VMessageModule} from '../../../shared/components/vmessage/vmessage.module';
import {CategoryFormComponent} from './category-form.component';
import {BtnReturnModule} from '../../btn-return/btn-return.module';
import {ProductDetailsModule} from '../../products/product-details/product-details.module';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        BtnReturnModule,
        ProductDetailsModule,
        NavegateMapModule,
    ],
  exports: [
    CategoryFormComponent
  ],
    declarations: [CategoryFormComponent]
})
export class CategoryFormModule { }
