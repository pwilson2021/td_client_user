import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  
  orders: any = [];

  ngOnInit() {
    this.orders = this.orderService.getOrders().subscribe(res => {this.orders = res;});
  }

  pageTitle= 'Orders';
}
