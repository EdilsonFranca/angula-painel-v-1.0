import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Order} from '../order/order.model';
import {OrderService} from '../order/order.service';

@Injectable({ providedIn: 'root'})
export class OrderListResolver implements Resolve<Observable<Order[]>> {

    constructor(private service: OrderService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> {
      return this.service.listFromOrder();
    }
}
