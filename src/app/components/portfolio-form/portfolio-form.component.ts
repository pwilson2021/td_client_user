import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Portfolio } from 'src/app/domain/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {
  pageTitle= 'Portfolio Form';
  
  new_portfolio: Portfolio = { name: '' };

  constructor(private portfolioService: PortfolioService, private route: Router) { }

  ngOnInit(): void {
  }

  submit(portfolio: NgForm){
    console.log(this.new_portfolio);
    this.portfolioService.addPortfolio(this.new_portfolio);
    this.route.navigate(['/portfolio']);
  }

}
