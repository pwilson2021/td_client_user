import { Component, OnInit } from '@angular/core';
import {MarketdataService} from '../../services/marketdata.service';
import {MarketData} from '../../domain/marketdata';

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {

  constructor(private marketdataService:MarketdataService) { }

  marketdata: any = [];

  ngOnInit() {
    this.marketdata = this.marketdataService.getMarketData().subscribe(
      (res) => {this.marketdata = res;
        }    
  );
}

}
