import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Category} from './category';
import {environment} from '../../../../environments/environment';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class CategoryService {

  constructor(private http: HttpClient) {}

  listFromCategory() {
    return this.http.get<Category[]>(API + 'category');
  }

  removeCategory(id: number) {
    return this.http.delete(API + 'category/' + id);
  }

  create(name: String) {
    return this.http.post<Category>(API + 'category', { 'name' : name });
  }

  findById(id: any) {
    return this.http.get<Category>(API + 'category/' + id);
  }

  editAdditional(category_id: number, additional_id) {
    return this.http.post(API + 'category/add_additional', { category_id: category_id , additional_id: additional_id });
  }

}
