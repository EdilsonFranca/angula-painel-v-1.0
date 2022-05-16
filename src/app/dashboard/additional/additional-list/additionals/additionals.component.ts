import { Component, Input } from '@angular/core';
import {Additional} from '../../additional/additional';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../shared/components/alert/alert.service';
import {AdditionalService} from '../../additional/additional.service';

@Component({
  selector: 'app-additionals',
  templateUrl: './additionals.component.html',
  styleUrls: ['./additionals.component.css']
})
export class AdditionalsComponent {

  @Input() additional: Additional[] = [];
  additional$: Observable<Additional>;

  constructor(
    private route: ActivatedRoute,
    private additionalService: AdditionalService,
    private router: Router,
    private alertService: AlertService,
  ) {}

  remove() {
    // @ts-ignore
    this.additionalService.removeAdditional(this.additional$.id).subscribe((response) => {
      // @ts-ignore
      if (response.success) {
        // @ts-ignore
        this.additional.splice(this.additional.indexOf(this.additional$.id), 1);
      } else {
        // @ts-ignore
        this.alertService.danger(`${response.message}`, true);
      }
    });
  }

  add_additional($event: any) {
    this.additional$ = $event;
  }
}
