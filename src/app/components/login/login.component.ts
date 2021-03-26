import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private userService : UserService, private router: Router){}

  ngOnInit(){
  }
  user = {
    email: '',
    password:''
  };

  // submit(login: NgForm){
  //   this.user.email = login.value.email;
  //   this.user.password = login.value.password;
  //   console.log(this.user);  
  // }

  submit(login: NgForm){
    this.userService.login(this.user.email, this.user.password);
    console.log({
      Email: this.user.email, 
      password: this.user.password
    });
    }

}
