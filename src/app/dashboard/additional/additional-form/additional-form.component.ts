import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/components/alert/alert.service';
import {AdditionalService} from '../additional/additional.service';

@Component({
  selector: 'app-additional-form',
  templateUrl: './additional-form.component.html',
  styleUrls: ['./additional-form.component.css']
})
export class AdditionalFormComponent implements OnInit {

  additionalForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private additionalService: AdditionalService,
    private router: Router,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.additionalForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  create() {
    const name = this.additionalForm.get('name').value;
    const price = this.additionalForm.get('price').value;
    this.additionalService
      .create(name , price)
      .subscribe((response) => {
        // @ts-ignore
        if (response.success) {
          this.router.navigate(['dashboard/additional']);
        } else {
          // @ts-ignore
          this.alertService.danger(response.message, true);
        }
      });
  }
}
