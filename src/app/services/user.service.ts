import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from '../domain/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseUrl = 'https://simba-client-connectivity.herokuapp.com'
  // private userSubject: BehaviorSubject<User>;
  // public user: Observable<User>;

 //private users: User[] = [];

  constructor( private http: HttpClient, private router: Router) { 
    // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    // this.user = this.userSubject.asObservable();
  }
  
  // register(user:User){
  //   this.users.push(user);
  //   console.log(this.users);
  // }

  // login(email: string, password: string){
  //   //this.users.push(user);
  //   console.log(this.users);
  // }

  // login(email: string, password: string){
  //   return this.http.post(this.baseUrl+'/login/', {email, password})
  // }

  // login(email: string, password: string){
  //   return this.http.post<User>(this.baseUrl+'/login/', {email, password})
  //   .pipe(map(user => {
  //     localStorage.setItem('user', JSON.stringify(user));
  //     this.userSubject.next(user);
  //     return user;
  //   }));
  // }

  login(email: string, password: string){
    return this.http.post(this.baseUrl+'/login/', {email, password})
  }

  //Joe's idea, you can try it out. Try for the registration too.
  // login(email: string, password: string){
  //   return this.http.post(this.baseUrl+'/login/', {email: email, password: password}).subscribe(res => {
    //   console.log(res); // we can send to reporting service from here.
    // }, error => {
    //   console.log('Couldn\'t Login. Something went wrong!') // Can go to reporting service.
    // })
  // }

  register(user: User){
    return this.http.post(this.baseUrl+'/api/users', user)
  }
}
