import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portfolio } from 'src/app/domain/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  portfolios: Portfolio[] = [];
  
  ngOnInit(): void {
    // this.portfolios = this.portfolioService.getPortfolios();

    // Getting data from api
    this.portfolioService.getUserPortfolios().subscribe(res => this.portfolios = res);
   }

  viewPortfolio(portfolio: number){
    this.router.navigate(['/portfolio-list', portfolio]);
    // console.log(portfolio);
  }
}