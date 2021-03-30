import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardstats',
  templateUrl: './dashboardstats.component.html',
  styleUrls: ['./dashboardstats.component.css']
})
export class DashboardstatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  portfolio_number = 3;
  wallet = 300;
  order_number = 4

}
