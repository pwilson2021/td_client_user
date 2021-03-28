import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from '../domain/portfolio';
// import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }
  private portfolios: Portfolio[] = [
    { id: 1, name: "Port A" },
    { id: 2, name: "Port B" },
    { id: 3, name: "Port c" }
  ] //See Elvis on this.

  // getAllPortfolios(){
  //   // return this.http.get();
  // }

  getPortfolios(): Portfolio[]{
    return this.portfolios;
  }

  addPortfolio(portfolio: Portfolio){
    this.portfolios.push(portfolio);
  }

  getPortfolio(id: number){
    let portfolio_id: Portfolio[] = this.getPortfolios()
    return portfolio_id.find(p => p.id == id);
  }
}
