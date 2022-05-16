import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  @Input() category: Category;
  @Output() remove_category = new EventEmitter<any>();

  openModal(category) {
    this.remove_category.emit(category);
  }
}
