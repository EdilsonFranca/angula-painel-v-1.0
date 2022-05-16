import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CategoryService} from '../category/category.service';
import {Category} from '../category/category';

@Injectable({ providedIn: 'root'})
export class CategoryListResolver implements Resolve<Observable<Category[]>> {

    constructor(private service: CategoryService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
      return this.service.listFromCategory();
    }
}
