import { Injectable } from '@angular/core';
import {Order} from '../domain/order';
import {Product} from '../domain/product';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = 'https://simba-client-connectivity.herokuapp.com'
  response: any;

  constructor( private http: HttpClient, private router: Router, private storageService: StorageService) { }

  // private orders: Order[] = [
  //   {id: 1, order_type: "Buy", 
  //   product: "AAPL", 
  //   quantity: 200, 
  //   price: 1.50, 
  //   //order_value: 250, 
  //   portfolio: ['B'],
  //   order_status: "Pending" },

  //   {id: 2, 
  //     order_type: "Sell", 
  //     product: "MSFT", 
  //     quantity: 110, 
  //     price: 2.50, 
  //     //order_value: value,
  //     portfolio: ['A'],
  //     order_status: "Validated" }
  // ];

  orders: Order[];

  user = this.storageService.getInfo("userObj");
  user_id = JSON.parse(this.user).id;

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/api/products`);
  }

  public getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/api/orders/get_user_orders/${this.user_id}`);
  }

  addOrder(order:Order){
    return this.http.post(`${this.baseUrl}/api/orders`, order).subscribe(res => {
      this.response = res;
      if(this.response.code == 200){
        alert("Order placed");
        console.log(res);
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