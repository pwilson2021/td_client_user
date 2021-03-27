import { Injectable } from '@angular/core';
import {Order} from '../domain/order';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // private products = ['AAPL', 'MSFT',
  //           'NFLX', 'GOOGL', 'TSLA', 'IBM', 'ORCL', 'AMZN'];

  private orders: Order[] = [
    {id: 1, order_type: "Buy", 
    product: "AAPL", 
    quantity: 200, 
    price: 1.50, 
    //order_value: 250, 
    portfolio: ['B'],
    order_status: "Pending" },

    {id: 2, 
      order_type: "Sell", 
      product: "MSFT", 
      quantity: 110, 
      price: 2.50, 
      //order_value: value,
      portfolio: ['A'],
      order_status: "Validated" }
  ];

  constructor(private router: Router) { }

  // public getProducts(){
  //   return this.products;
  // }

  public getOrders(): Order[]{
    return this.orders;
  }

  addOrder(order:Order){
    this.orders.push(order);
    this.router.navigate(['/orders']);

  }

}
