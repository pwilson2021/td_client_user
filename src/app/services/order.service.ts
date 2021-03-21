import { Injectable } from '@angular/core';
import {Order} from '../domain/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    {id: 1, order_type: "Buy", order_stock: "AAPL", order_quantity: 200, price: 1.50, order_value: 250, order_status: "Pending" },
    {id: 2, order_type: "Sell", order_stock: "MSFT", order_quantity: 110, price: 2.50, order_value: 275, order_status: "Validated" }
  ];

  public getOrders(): Order[]{
    return this.orders;
  }

  addOrder(order:Order){
    this.orders.push(order);
  }

  constructor() { }
}
