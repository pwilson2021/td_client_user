import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Portfolio } from 'src/app/domain/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {
  pageTitle= 'Portfolio Form';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  // public portfolio: Portfolio = new Portfolio();

  submit(portfolio: NgForm){
    // this.portfolio.add
    console.log("Created a new Portfolio");
  }

}
