import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private userService : UserService, private storageService: StorageService, private router: Router) { }
  user = this.storageService.getInfo("userObj");
  firstName = JSON.parse(this.user).firstname;
  pageTitle: string = '';

  ngOnInit(): void {
    console.log(this.firstName);
    if (this.router.url.includes('dashboard')) this.pageTitle= 'Home'
      else if (this.router.url.includes('portfolio')) this.pageTitle= 'Portfolio'
      else if (this.router.url.includes('order')) this.pageTitle= 'Orders'
  }

  today: number = Date.now();
  
  logout(){
    this.userService.logout();
  }

}
