import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Portfolio } from 'src/app/domain/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {
  pageTitle= 'Portfolio Form';
  
  constructor(private portfolioService: PortfolioService, private route: Router, private storageService: StorageService) { }

  user = this.storageService.getInfo("userObj");
  user_id = JSON.parse(this.user).id;
  new_portfolio: Portfolio = { name: '', user_id: this.user_id };

  ngOnInit(): void {
  }

  submit(portfolio: NgForm){
    this.portfolioService.addPortfolio(this.new_portfolio);
    console.log(this.new_portfolio);
    // this.route.navigate(['/portfolio']);
  }

}
