import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from '../domain/user';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseUrl = 'https://simba-client-connectivity.herokuapp.com'
  response: any;

  constructor( private http: HttpClient, private router: Router, private storageService: StorageService) {}

  login(email: string, password: string){
    return this.http.post(`${this.baseUrl}/login/`, {email: email, password: password}).subscribe(res => {
      this.response = res;
      //console.log("This is response" + JSON.stringify(this.response));
      if(this.response.code == 200){
        this.storageService.saveInfo("userObj", JSON.stringify(this.response));
        //this.storageService.saveInfo("userObj", this.response);
        this.router.navigate(['/dashboard']);
      }
      else{
        alert("Invalid Credentials");
      }
    }, error => {
      console.log('Couldn\'t Login. Something went wrong!');
    })
  }

  logout(){
    this.storageService.clearInfo("userObj");
    this.router.navigate(['/login']);
  }

  register(user: User){
    return this.http.post(`${this.baseUrl}/api/users`, user).subscribe(res => {
      //console.log(res);
      this.response = res;
      if(this.response.code == 200){
        alert("Signup successful. Log In now");
        this.router.navigate(['/login']);
      }
      else{
        console.log("Signup failed");
      }

    }, error => {
      console.log('Couldn\'t Register. Something went wrong!') // Can go to reporting service.
    })
  }

}
