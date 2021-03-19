import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { 
    loginForm: FormGroup;
    //this.isSubmitted  =  false;
  }



  ngOnInit(): void {
  //   this.loginForm  =  this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  // });
  }

}
