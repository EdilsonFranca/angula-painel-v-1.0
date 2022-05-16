import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Additional} from './additional';
import {environment} from '../../../../environments/environment';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class AdditionalService {

  constructor(private http: HttpClient) {}

  listFromAdditional() {
    return this.http.get<Additional[]>(API + 'additional');
  }

  removeAdditional(id: number) {
    return this.http.delete(API + 'additional/' + id);
  }

  create(name: String , price: String) {
    return this.http.post<Additional>(API + 'additional', { 'name' : name , 'price' : price});
  }
}
