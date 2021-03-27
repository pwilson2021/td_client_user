import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  user: any;
  firstName: any;

  ngOnInit(): void {
    this.user = this.storageService.getInfo("userObj");
    //console.log("This is a logged in user" + this.user);
    this.firstName = this.user.firstname;
  }

  
  pageTitle= 'Dasboard';

}
