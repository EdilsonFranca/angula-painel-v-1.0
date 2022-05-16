import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Product} from '../../product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges {

  @Input() products: Product[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.products) {
      this.rows = this.groupColumns(this.products);
    }
  }

  groupColumns(products: Product[]) {
    const newRows = [];

    for (let index = 0; index < products.length; index += 3) {
      newRows.push(products.slice(index, index + 3));
    }
    return newRows;
  }
}
