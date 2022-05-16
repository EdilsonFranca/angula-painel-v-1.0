import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ConfirmRemove, ElementType} from './confirm-remove';

@Injectable({
  providedIn: 'root'
})
export class ConfirmRemoveService {

  removeSubject: Subject<ConfirmRemove> = new Subject<ConfirmRemove>();

  constructor() {}

  confirm(name: string, type: ElementType, id , keepAfterRouteChange: boolean = false) {
    this.removeSubject.next(new ConfirmRemove(id, name, type));
  }

  getAlert() {
    return this.removeSubject.asObservable();
  }
}
