import {Component, Input, OnInit} from '@angular/core';
import {ConfirmRemoveService} from './confirm-remove.service';
import { ProductService } from '../../../dashboard/products/product/product.service';
import {AlertService} from '../alert/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comfirm-remove',
  templateUrl: './confirm-remove.component.html',
  styleUrls: ['./confirm-remove.component.css']
})
export class ConfirmRemoveComponent implements OnInit {
  @Input()  name: any;
  @Input()  type: any;
  @Input()  id: any;

  constructor(private confirmRemoveService: ConfirmRemoveService,
              private alertService: AlertService,
              private productService: ProductService,
              private router: Router) {

    this.confirmRemoveService
      .getAlert()
      .subscribe(data => {
        this.id    = data.id;
        this.name  = data.name;
        this.type  = data.type;
      });
  }

  ngOnInit(): void {}

  closeModal() {
    this.name = null;
  }

  remove_product() {
    this.productService
      .removeProduct(this.id)
      .subscribe(
        () => {
          this.name = null;
          this.router.navigate(['/product']);
        },
        err => {
          console.log(err);
          this.alertService.warning('Could not delete the Product!', true);
        });
  }
}
