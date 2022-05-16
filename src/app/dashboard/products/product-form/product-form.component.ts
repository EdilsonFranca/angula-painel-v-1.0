import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../shared/components/alert/alert.service';
import {Category} from '../../categories/category/category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  categories: Category[] = [];
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const response =  this.route.snapshot.data['categories'];
      this.categories = response.data;
    });

    this.productForm = this.formBuilder.group({
      file: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      price_promotion: [],
      description: ['', Validators.maxLength(100)],
      category_id: ['', Validators.required],
    });
  }

  upload() {
    const name            = this.productForm.get('name').value;
    const description     = this.productForm.get('description').value;
    const price           = this.productForm.get('price').value;
    const price_promotion = this.productForm.get('price_promotion').value;
    const category_id     = this.productForm.get('category_id').value;

    this.productService
      .upload(name, description, price, price_promotion, category_id, this.file)
      .subscribe((response) => {
        // @ts-ignore
        if (response.success) {
          this.router.navigate(['dashboard/product']);
        }
        // @ts-ignore
        this.alertService.danger(response.message, true);
      });
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }
}
