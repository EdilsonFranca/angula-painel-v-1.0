import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DataService} from '../data/data.service';

@Injectable({ providedIn: 'root'})
export class DashboardDataResolver implements Resolve<Observable<any>> {

    constructor(private service: DataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.service.listFromOrder('year');
    }
}
