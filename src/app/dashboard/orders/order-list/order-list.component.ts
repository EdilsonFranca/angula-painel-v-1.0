import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../order/order.model';
import {OrderService} from '../order/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  orders: Order[] = [];
  private id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
  ) {}

  ngOnInit() {
    this.id = setInterval(() => {
      this.getOrders();
    }, 5000);

     this.activatedRoute.params.subscribe(params => {
      const response =  this.activatedRoute.snapshot.data['orders'];
       this.orders = response;
    });
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  getOrders() {
    this.orderService.listFromOrder()
      .subscribe((orders) => {
        this.orders = orders;
      }, err => {
      });
  }
}
