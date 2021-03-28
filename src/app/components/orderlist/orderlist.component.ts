import { Component, OnInit } from '@angular/core';
import { Order } from '../../domain/order';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    //this.orders = this.orderService.getOrders();
  }

  orders: Order[] = [];
  //orders: Order[];

  pageTitle= 'Orders';
}
