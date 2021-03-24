import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {User} from '../domain/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseUrl = 'https://simba-client-connectivity.herokuapp.com'

  private users: User[] = [];

  constructor( private http: HttpClient) { }
  
  // register(user:User){
  //   this.users.push(user);
  //   console.log(this.users);
  // }

  // login(email: string, password: string){
  //   //this.users.push(user);
  //   console.log(this.users);
  // }

  login(email: string, password: string){
    return this.http.post(this.baseUrl+'/login', {email, password})
  }

  register(user: User){
    return this.http.post(this.baseUrl+'/api/users', user)
  }
}
