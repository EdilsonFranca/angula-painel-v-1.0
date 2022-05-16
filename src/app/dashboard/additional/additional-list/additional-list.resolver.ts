import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AdditionalService} from '../additional/additional.service';
import {Additional} from '../additional/additional';



@Injectable({ providedIn: 'root'})
export class AdditionalListResolver implements Resolve<Observable<Additional[]>> {

    constructor(private service: AdditionalService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Additional[]> {
      return this.service.listFromAdditional();
    }
}
