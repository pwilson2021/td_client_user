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

  constructor(private orderService : OrderService, private router: Router){}

  ngOnInit(): void {
  }

  order: Order = {
    id: 0,
    order_type: '',
    order_stock: '',
    order_quantity: 0,
    price: 0,
    order_value: 0,
    order_status: '',
  };

  submit(order: NgForm){
    console.log(this.order);
    this.orderService.addOrder(this.order);
    // //this.user = new User();
    this.router.navigate(['/orders']);
  }

}
