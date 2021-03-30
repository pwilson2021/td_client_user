import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/domain/order';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  
  orders: Order[] = [];

  ngOnInit() {
    // this.orders = this.orderService.getOrders();

    // Getting data from api
    this.orderService.getOrders().subscribe(res => this.orders = res);
  }
}