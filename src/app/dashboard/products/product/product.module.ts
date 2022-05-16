import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ProductComponent} from './product.component';
import {RouterModule} from '@angular/router';
import {PhotoComponent} from '../../../photo/photo.component';

  @NgModule({
      declarations: [ProductComponent, PhotoComponent],
      imports: [
          CommonModule,
          HttpClientModule,
          RouterModule
      ],
      exports: [ProductComponent, PhotoComponent]
  })
export class ProductModule { }
