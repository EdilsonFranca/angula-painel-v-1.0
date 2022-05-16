import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../../../../environments/environment';
import {Order} from './order.model';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class OrderService {

  constructor(private http: HttpClient) {}

  listFromOrder() {
    return this.http.get<Order[]>(API + 'order');
  }

  change_status(orderId: string, next_state: string) {
    // @ts-ignore
    return this.http.post(API + 'order/change_status/' + orderId, { orderId: orderId , state: next_state });
  }
}
