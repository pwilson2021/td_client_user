import { Injectable } from '@angular/core';
import {Order} from '../domain/order';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = 'https://simba-client-connectivity.herokuapp.com'
  response: any;

  // private products = [];
  constructor( private http: HttpClient, private router: Router) { }

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

  // public getProducts(){
  //   return this.products;
  // }

  // public getOrders(): Order[]{
  //   return this.orders;
  // }

  // addOrder(order:Order){
  //   this.orders.push(order);
  //   this.router.navigate(['/orders']);

  // }

  public getOrders(){
    return this.http.get(`${this.baseUrl}/api/orders`).subscribe(res =>{
      
    })
  }

  addOrder(order:Order){
    return this.http.post(`${this.baseUrl}/api/orders`, order).subscribe(res => {
      this.response = res;
      if(this.response.code == 200){
        alert("Order placed");
        this.router.navigate(['/orders']);
      }
      else{
        console.log("Order creation failed");
      }

    }, error => {
      console.log('Couldn\'t place order. Something went wrong!')
    })
  }

}
