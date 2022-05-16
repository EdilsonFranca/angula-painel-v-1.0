import {Component, OnInit, ViewChild} from '@angular/core';
import { Product } from '../product/product';
import {ActivatedRoute, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  products: Product[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
      const response =  this.activatedRoute.snapshot.data['products'];
       this.products = response.data;
    });
  }
}
