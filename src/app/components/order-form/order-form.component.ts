import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {OrderService} from '../../services/order.service';
import {Order} from '../../domain/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  //products: any = [];
  products = ['AAPL', 'MSFT', 'NFLX', 'GOOGL', 'TSLA', 'IBM', 'ORCL', 'AMZN'];

  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

  order_type = ['BUY', 'SELL'];
  portfolio = ['A', 'B', 'C'];

  // newOrder: Order = {
  //   id: 5,
  //   price: 1.20,
  //   quantity: 20,
  //   product: 'AAPL',
  //   order_type: 'BUY',
  //   order_status: 'Pending',
  // }

  newOrder: Order = {
    id: 0,
    price: 0,
    quantity: 0,
    product: '',
    order_type: '',
    portfolio: [],
    order_status: 'Pending',
  }

  constructor(private orderService : OrderService, private router: Router){}

  ngOnInit(){
    //this.products = this.orderService.getProducts();

  }
  
  submit(order: NgForm){
    console.log(this.newOrder);
    this.orderService.addOrder(this.newOrder);
    this.router.navigate(['/orders']);
  }

  pageTitle= 'Order';

}
