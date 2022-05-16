import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CategoryComponent} from './category.component';

  @NgModule({
    declarations: [CategoryComponent],
      imports: [
          CommonModule,
          HttpClientModule,
          RouterModule
      ],
    exports: [CategoryComponent]
  })
export class CategoryModule { }
