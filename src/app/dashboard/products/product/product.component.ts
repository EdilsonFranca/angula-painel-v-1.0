import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  @Input() description = '';
  @Input() id = '';
  @Input() name = '';
  @Input() price = '';
  @Input() price_promotion = '';
  @Input() created_at = '';
  @Input() photo = '';
}
