import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VMessageModule} from '../../../shared/components/vmessage/vmessage.module';
import {AdditionalFormComponent} from './additional-form.component';
import {ProductDetailsModule} from '../../products/product-details/product-details.module';
import {BtnReturnModule} from '../../btn-return/btn-return.module';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule,
    RouterModule,
    ProductDetailsModule,
    BtnReturnModule,
    NavegateMapModule,
  ],
  exports: [
    AdditionalFormComponent
  ],
    declarations: [AdditionalFormComponent]
})
export class AdditionalFormModule { }
