import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdditionalListComponent} from './additional-list.component';
import {AdditionalsComponent} from './additionals/additionals.component';
import {ProductDetailsModule} from '../../products/product-details/product-details.module';
import {ProductListModule} from '../../products/product-list/product-list.module';
import {AdditionalModule} from '../additional/additional.module';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';
import {BtnNewModule} from '../../btn-new/btn-new.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductDetailsModule,
    ProductListModule,
    AdditionalModule,
    NavegateMapModule,
    BtnNewModule,
  ],
  declarations: [
    AdditionalListComponent,
    AdditionalsComponent,
  ]
})
export class AdditionalListModule { }
