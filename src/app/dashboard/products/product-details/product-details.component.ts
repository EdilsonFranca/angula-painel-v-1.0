import {Component, OnInit} from '@angular/core';
import {Product} from '../product/product.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product/product.service';
import {AlertService} from '../../../shared/components/alert/alert.service';
import {Category} from '../../categories/category/category';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  categories: Category[] = [];
  productForm: FormGroup;
  file: File;
  preview: string;
  id: number;
  name: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private alertService: AlertService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const response =  this.route.snapshot.data['categories'];
      this.categories = response.data;
    });

    this.id = this.route.snapshot.params.id;
    this.productService.findById(this.id).subscribe((product) => {
      this.product  = product;
      this.name = this.product.name;
    }, err => {});

    this.productForm = this.formBuilder.group({
      file: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      category_id: ['', Validators.required],
      price_promotion: [],
      description: ['', Validators.maxLength(100)],
      id: [''],
    });
  }

  upload_edit() {
    const id              = this.productForm.get('id').value;
    const name            = this.productForm.get('name').value;
    const description     = this.productForm.get('description').value;
    const price           = this.productForm.get('price').value;
    const price_promotion = this.productForm.get('price_promotion').value;
    const category_id     = this.productForm.get('category_id').value;

    this.productService
      .upload_edit(id, name, description, price, price_promotion, category_id, this.file)
      .subscribe((response) => {
        // @ts-ignore
        if (response.success) {
            // @ts-ignore
          this.alertService.success(response.message, true);
        } else {
          // @ts-ignore
          this.alertService.danger(response.message, true);
        }
      });
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

  remove() {
    this.productService.removeProduct(this.id)
      .subscribe((response) => {
        // @ts-ignore
        if (response.success) {
          this.router.navigate(['dashboard/product']);
        }
        // @ts-ignore
        this.alertService.danger(response.message, true);
      });
  }
}
