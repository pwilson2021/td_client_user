import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  constructor(private orderService: OrderService, private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

}
