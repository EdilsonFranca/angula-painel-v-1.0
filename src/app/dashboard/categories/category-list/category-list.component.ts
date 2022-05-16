import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../category/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
      const response =  this.activatedRoute.snapshot.data['categories'];
       this.categories = response.data;
    });
  }
}
