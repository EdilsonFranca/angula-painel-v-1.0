import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AdditionalComponent} from './additional.component';

  @NgModule({
    declarations: [AdditionalComponent],
      imports: [
          CommonModule,
          HttpClientModule,
          RouterModule
      ],
    exports: [AdditionalComponent]
  })
export class AdditionalModule { }
