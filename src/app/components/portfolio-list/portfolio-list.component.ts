import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from 'src/app/domain/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Order } from '../../domain/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  constructor(private portfolioService: PortfolioService, private activatedReoute: ActivatedRoute, private orderService: OrderService) { }

  portfolios: Portfolio = {
    name: ""
  };
  orders: Order[] = [];
  id: any;
  sub: any;
  ngOnInit(): void {
    this.sub = this.activatedReoute.paramMap.subscribe((params: any) => {
      console.log(params);
      this.id = params.get('id');
      let portfolio = this.portfolioService.getUserPortfolios();
      // this.portfolios = portfolio.(p => p.id == this.id);
    });
    // this.orders = this.orderService.getOrders();
  }

  getPortfolioName(){
    return this.portfolios.name;
  }

}
