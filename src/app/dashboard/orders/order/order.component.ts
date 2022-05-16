import {Component, Input} from '@angular/core';
import {Order} from './order.model';
import {OrderService} from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  @Input() order: Order;

  constructor(
    private orderService: OrderService,
  ) {}

  getDate(created_at: string) {
    // tslint:disable-next-line:max-line-length
    return new Date(created_at).toLocaleString('pt-BR',{ day : 'numeric', month:'numeric', year:'numeric', hour: '2-digit', minute: '2-digit' })
  }

  getDescriptionItem(product) {
    const price = product.product.price_promotion ? product.product.price_promotion : product.product.price;
    const total = product.quantity * price;
    return total.toFixed(2);
  }

  change_status(order: any) {
    let next_state  = '';
    switch (order.state) {
      case 'Feito': next_state = 'Aprovado';
        break;
      case 'Aprovado': next_state = 'Enviado';
        break;
      case 'Enviado': next_state = 'Entregue';
        break;
      case 'Entregue': next_state = 'history';
        break;
      default:
    }

    this.orderService.change_status(this.order.id_order, next_state)
      .subscribe((response) => {
        // @ts-ignore
        this.order.state = response.state;
      });
  }
}
