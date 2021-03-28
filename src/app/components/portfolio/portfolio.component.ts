import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  portfolios: any = [];
  
  ngOnInit(): void {
    // this.portfolios = this.portfolioService.getPortfolios();

    // Use this when getting from the api
    this.portfolios = this.portfolioService.getUserPortfolios().subscribe(
      (res) => {this.portfolios = res;
        }    
  );
   }

  pageTitle= 'Portfolio';

  viewPortfolio(portfolio: number){
    this.router.navigate(['/portfolio-list', portfolio]);
    console.log(portfolio);
  }

}
