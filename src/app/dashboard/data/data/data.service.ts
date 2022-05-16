import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class DataService {

  constructor(private http: HttpClient) {}

  listFromOrder(type: string) {
    return this.http.get(API + 'dashboard/order/' + type);
  }
}
