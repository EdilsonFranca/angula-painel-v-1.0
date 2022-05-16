import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Product} from './product';
import {environment} from '../../../../environments/environment';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private http: HttpClient) {}

  listFromProductPaginated() {
    return this.http.get<Product[]>(API + 'product');
  }

  upload(name: string , description: string, price: string, price_promotion: string, category_id: number, file: File) {
    const formData = this.create_product(name, price, price_promotion, description, category_id, file);
    return this.http.post(API + 'product', formData);
  }

  upload_edit(id: string, name: string , description: string, price: string, price_promotion: string, category_id: number, file: File) {
    const formData = this.create_product(name, price, price_promotion, description, category_id, file);
    formData.append('id_product', id);
    return this.http.post(API + 'product/' + id, formData);
  }

  private create_product(name: string, price: string, price_promotion: string, description: string, category_id: number, file: File) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('price_promotion', price_promotion);
    formData.append('description', description);
    // @ts-ignore
    formData.append('category_id', category_id);
    formData.append('photo', file);
    return formData;
  }

  findById(id: number) {
    return this.http.get<Product>(API + 'product/' + id);
  }

  removeProduct(id: number) {
    return this.http.delete(API + 'product/' + id);
  }
}
