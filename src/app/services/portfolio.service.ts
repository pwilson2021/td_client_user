import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from '../domain/portfolio';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  configUrl = '../domain/config.json';
  private portfolio: Portfolio[] = [] //See Elvis on this.

  getAllPortfolios(){
    return this.http.get<Config>(this.configUrl);
  }

  getPortfolios(): Portfolio[]{
    return this.portfolio;
  }

  addPortfolio(portfolio: Portfolio){
    this.portfolio.push(portfolio);
  }

  getPortfolio(id: number){
    let portfolio_id: Portfolio[] = this.getPortfolios()
    return portfolio_id.find(p => p.id == id);
  }
}
