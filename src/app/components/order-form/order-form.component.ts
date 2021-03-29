import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {OrderService} from '../../services/order.service';
import {PortfolioService} from '../../services/portfolio.service';
import {Order} from '../../domain/order';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  //products = ['AAPL', 'MSFT', 'NFLX', 'GOOGL', 'TSLA', 'IBM', 'ORCL', 'AMZN'];

  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

  order_type = ['BUY', 'SELL'];
  products: any[];
  portfolio : any[];

  user = this.storageService.getInfo("userObj");
  user_id = JSON.parse(this.user).id;
  newOrder: Order = {
    //id: 0,
    price: 0,
    quantity: 0,
    product_id: 0,
    order_type: '',
    portfolio_id: 0,
    order_status: 'Pending',
    user_id: this.user_id
  }

  constructor(private orderService : OrderService, private portfolioService : PortfolioService, private router: Router, private storageService: StorageService){}

  ngOnInit(){
    //console.log(this.portfolioName);
    this.orderService.getProducts().subscribe(res=>this.products = res);
    this.portfolioService.getUserPortfolios().subscribe(res=>this.portfolio = res);

  }
  
  submit(order: NgForm){
    console.log(this.newOrder);
    this.orderService.addOrder(this.newOrder);
    this.router.navigate(['/orders']);
  }

  pageTitle= 'Order';

}
