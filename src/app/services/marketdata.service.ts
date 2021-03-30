import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {MarketData} from '../domain/marketdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketdataService {
  baseUrl = 'https://exchange.matraining.com/md'
  response: any;

  constructor(private http: HttpClient) { }

  private marketdata: MarketData[] = [];

  // getMarketData(){
  //   return this.http.get(this.baseUrl).subscribe(res=> {
  //     for (const r of (res as any)) {
  //       this.marketdata.push({
  //         ticker: r.TICKER,
  //         last_traded_price: r.LAST_TRADED_PRICE, 
  //         bid_price: r.BID_PRICE,
  //         ask_price: r.ASK_PRICE
  //       });
  //     }
  //     console.log(this.marketdata);
  //   });

  // }

  getMarketData() : Observable<MarketData[]>{
    return this.http.get<MarketData[]>(this.baseUrl)
    };


  
}
