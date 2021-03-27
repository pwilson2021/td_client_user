import { Injectable } from '@angular/core';
import {Order} from '../domain/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products = ['AAPL', 'MSFT',
            'NFLX', 'GOOGL', 'TSLA', 'IBM', 'ORCL', 'AMZN'];

  private orders: Order[] = [
    {id: 1, order_type: "Buy", 
    product: "AAPL", 
    quantity: 200, 
    price: 1.50, 
    //order_value: 250, 
    order_status: "Pending" },

    {id: 2, 
      order_type: "Sell", 
      product: "MSFT", 
      quantity: 110, 
      price: 2.50, 
      //order_value: value, 
      order_status: "Validated" }
  ];

  public getProducts(){
    return this.products;
  }

  public getOrders(): Order[]{
    return this.orders;
  }

  addOrder(order:Order){
    this.orders.push(order);
  }

  constructor() { }
}
