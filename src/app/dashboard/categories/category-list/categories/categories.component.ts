import { Component, Input } from '@angular/core';
import {Category} from '../../category/category';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../shared/components/alert/alert.service';
import {CategoryService} from '../../category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})

export class CategoriesComponent {

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private alertService: AlertService,
  ) {}

  @Input() categories: Category[] = [];
  category$: Observable<Category>;

  remove() {
   // @ts-ignore
    this.categoryService.removeCategory(this.category$.id).subscribe((response) => {
     // @ts-ignore
     if (response.success) {
       // @ts-ignore
       this.categories.splice(this.categories.indexOf(this.category$.id), 1);
     } else {
       // @ts-ignore
       this.alertService.danger(`A categoria não pode ser removda Pois esta atribuida aos Produtos ${response.productsName}`, true);
     }
   });
  }

  add_category($event: any) {
    this.category$ = $event;
  }
}
