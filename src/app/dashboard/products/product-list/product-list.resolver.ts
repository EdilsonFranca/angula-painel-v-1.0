import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from '../product/product';
import {ProductService} from '../product/product.service';


@Injectable({ providedIn: 'root'})
export class ProductListResolver implements Resolve<Observable<Product[]>> {

    constructor(private service: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
      return this.service.listFromProductPaginated();
    }
}
