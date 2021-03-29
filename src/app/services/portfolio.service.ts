import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Portfolio } from '../domain/portfolio';
import { StorageService } from './storage.service';
// import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  baseUrl = 'https://simba-client-connectivity.herokuapp.com'
  response: any;

  constructor(private http: HttpClient, private route: Router, private storageService: StorageService) { }
  private portfolios: Portfolio[] = [
    { name: "Port A", user_id: 1 },
    { name: "Port B", user_id: 2 },
    { name: "Port c", user_id: 3 }
  ] //See Elvis on this.

  getPortfolios(){
    return this.portfolios;
  }

  user = this.storageService.getInfo("userObj");
  user_id = JSON.parse(this.user).id;
  
  // Subscription is not working. Throwing errors.
  // getUserPortfolios(){
  //   return this.http.get(`${this.baseUrl}/api/portfolios/get_user_portfolios/${this.user_id}`).subscribe(res => {
  //     if (res) {
  //       this.response = res;
  //       console.log(JSON.stringify(this.response));
  //       this.storageService.savePortfolioInfo("portfolioObj", JSON.stringify(this.response));
  //     }
  //   }, error => {
  //     console.log("Couldn\'t Fetch Portfolios");
  //   });
  // }

  getUserPortfolios(): Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(`${this.baseUrl}/api/portfolios/get_user_portfolios/${this.user_id}`);
  }

  addPortfolio(portfolio: Portfolio){
    return this.http.post(`${this.baseUrl}/api/portfolios`, portfolio).subscribe(res => {
      this.response = res;
      console.log(res);
      if (this.response.code == 200){
        this.route.navigate(['/portfolio']);
      }else {
        console.log("Couldn\'t Add Portfolio");
        alert('Portfolio creation failed');
      }
    }, error => {console.log('Couldn\'t add Portfolio. Something went wrong!')});
  }

}