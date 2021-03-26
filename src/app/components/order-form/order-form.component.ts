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

  products: any = [];
  order_type = ['BUY', 'SELL'];
  portfolio = ['A', 'B', 'C'];
  constructor(private orderService : OrderService, private router: Router){}

  ngOnInit(){
    this.products = this.orderService.getProducts();

  }

  order: Order = {
    id: 0,
    price: 0,
    quantity: 0,
    product: '',
    order_type: '',
    //order_value: 0,
    order_status: '',
    //portfolio: '',
  };

  submit(order: NgForm){
    console.log(this.order);
    this.orderService.addOrder(this.order);
    // //this.user = new User();
    this.router.navigate(['/orders']);
  }

}
