import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveInfo(key:string, info:string) {
    localStorage.setItem(key, info);
  }

  getInfo(key: string) {
    return localStorage.getItem(key);
  }

  clearInfo(key:string) {
    localStorage.removeItem(key);
  }

  loggedIn(){
    return localStorage.getItem("userObj");
  }

  savePortfolioInfo(key:string, info:string) {
    localStorage.setItem(key, info);
  }

  getPortfolioInfo(key: string) {
    return localStorage.getItem(key);
  }

  clearPortfolioInfo(key:string) {
    localStorage.removeItem(key);
  }
  
}