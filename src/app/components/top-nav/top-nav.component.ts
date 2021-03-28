import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {StorageService} from '../../services/storage.service';



@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private userService : UserService, private storageService: StorageService) { }
  user: any;
  firstName: any;

  ngOnInit(): void {
    this.user = this.storageService.getInfo("userObj");
    //this.firstName = this.user.firstname;
    console.log("This is a logged in user " + this.user);
    this.firstName = JSON.parse(this.user).firstname;
    //console.log(this.firstName);

  }

  today: number = Date.now();
  
  logout(){
    this.userService.logout();
  }

}
