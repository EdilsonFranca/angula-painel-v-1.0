import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AlertService} from '../../../shared/components/alert/alert.service';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})

export class CategoryFormComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private alertService: AlertService,
  ) {}

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  create() {
    const name = this.categoryForm.get('name').value;
    this.categoryService
      .create(name)
      .subscribe((response) => {
        // @ts-ignore
        if (response.success) {
          this.router.navigate(['dashboard/category']);
        }
        // @ts-ignore
        this.alertService.success(response.message, true);
      });
  }
}
