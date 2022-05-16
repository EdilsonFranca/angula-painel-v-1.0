import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AdditionalListModule} from './additional-list/additional-list.module';
import {AdditionalFormModule} from './additional-form/additional-form.module';

@NgModule({
    imports: [
        AdditionalFormModule,
        AdditionalListModule,
        CommonModule,
        ReactiveFormsModule,
    ],
})
export class AdditionalModule { }
