import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from 'src/app/domain/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  constructor(private portfolioService: PortfolioService, private activatedRoute: ActivatedRoute) { }

  portfolios: Portfolio[] = []

  id: any;
  sub: any;

  ngOnInit(): void {
    this.portfolioService.getUserPortfolios().subscribe(res => this.portfolios = res);
    this.sub = this.activatedRoute.paramMap.subscribe((params: any) => {
      console.log(params);
      this.id = params.get('id');
      let portfolio = this.portfolioService.getUserPortfolios();
      this.portfolios = portfolio.(p => p.id == this.id);
    });
  }
}
