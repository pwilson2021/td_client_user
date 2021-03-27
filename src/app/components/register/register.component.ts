import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../domain/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService, private router: Router){}


  ngOnInit(): void {
  }

  user: User = {
    firstname:'',
    lastname:'',
    email: '',
    password:''
  };

  submit(register: NgForm){
    console.log(this.user);
    this.userService.register(this.user);
  }

}
