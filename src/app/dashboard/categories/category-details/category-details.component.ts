import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Category} from '../category/category.model';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../category/category.service';
import {Additional} from '../../additional/additional/additional';
import {AlertService} from '../../../shared/components/alert/alert.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})

export class CategoryDetailsComponent implements OnInit {

  category: Category = new Category();
  additional: Additional[] = [];
  additionalForm: FormGroup;
  selectedCountries: FormArray;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private categoryService: CategoryService,
  ) {
    this.additionalForm = formBuilder.group({
      selectedCountries:  new FormArray([])
    });
    this.selectedCountries = (this.additionalForm.controls.selectedCountries as FormArray);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const response = this.activatedRoute.snapshot.data['additional'];
      this.additional = response.data;
      // @ts-ignore
      this.categoryService.findById(this.route.snapshot.params.id)
        .subscribe((category) => {
          this.category = category;
          // @ts-ignore
          this.additional.forEach((item, index, arr) => {
            // @ts-ignore
            // tslint:disable-next-line:triple-equals
            if (this.category.category_additional.find((e) => e.additional_id == item.id)) {
              // @ts-ignore
              arr[index].cheked = true;
              this.selectedCountries.push(new FormControl(item.id));
            }
          });
        }, err => {
        });
    });
  }

  edit_category() {
    const additional_id = this.additionalForm.get('selectedCountries').value;
    this.categoryService.editAdditional(this.category.id, additional_id)
      .subscribe((response) => {
        // @ts-ignore
        this.alertService.success(response.message, true);
      });
  }

  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.selectedCountries.push(new FormControl(event.target.value));
    } else {
      // tslint:disable-next-line:triple-equals
      const index = this.selectedCountries.controls.findIndex(x => x.value == event.target.value);
      this.selectedCountries.removeAt(index);
    }
  }
}
