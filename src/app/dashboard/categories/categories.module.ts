import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryListModule} from './category-list/category-list.module';
import {CategoryFormModule} from './category-form/category-form.module';
import {CategoryDetailsModule} from './category-details/category-details.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CategoryListModule,
        CategoryFormModule,
        CategoryDetailsModule
    ],
})
export class CategoriesModule { }
