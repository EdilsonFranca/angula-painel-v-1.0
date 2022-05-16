import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VMessageModule} from '../../../shared/components/vmessage/vmessage.module';
import {BtnReturnModule} from '../../btn-return/btn-return.module';
import {CategoryDetailsComponent} from './category-details.component';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
    BtnReturnModule,
    NavegateMapModule,
  ],
    declarations: [
        CategoryDetailsComponent,
    ]
})
export class CategoryDetailsModule { }
