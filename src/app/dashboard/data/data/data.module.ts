import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {DataComponent} from './data.component';

  @NgModule({
    declarations: [DataComponent],
      imports: [
          CommonModule,
          HttpClientModule,
          RouterModule
      ],
    exports: [DataComponent]
  })
export class DataModule { }
