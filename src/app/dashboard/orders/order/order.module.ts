import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {OrderComponent} from './order.component';

  @NgModule({
    declarations: [OrderComponent],
      imports: [
          CommonModule,
          HttpClientModule,
          RouterModule
      ],
    exports: [OrderComponent]
  })
export class OrderModule { }
