import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';
import {DashboardDataComponent} from './dashboard-data.component';
import {DataComponent} from '../data/data.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavegateMapModule,
    ChartsModule
  ],
  declarations: [
    DashboardDataComponent,
    DataComponent,
  ]
})
export class DashboardDataModule { }
