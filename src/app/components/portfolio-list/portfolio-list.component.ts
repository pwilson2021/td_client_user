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

  constructor(private portfolioService: PortfolioService, private activatedReoute: ActivatedRoute) { }

  portfolio: Portfolio={
    name: "",
    id: 0,
    user_id: 0
  };
  id: any;
  sub: any;
  ngOnInit(): void {
    this.sub = this.activatedReoute.paramMap.subscribe((params: any) => {
      console.log(params);
      // this.id = params.get('id');
      // let portfolios = this.portfolioService.getPortfolios();
      // this.portfolio = portfolios.find(p => p.id == this.id);
    });
  }

}
