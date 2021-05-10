import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  token = '';

  constructor() {
    this.loadToken();
  }

  async loadToken(){
    const token = localStorage.getItem('token');

    if(token){
      this.token = token;
      this.isAuthenticated.next(true);
    }else{
      this.isAuthenticated.next(false)
    }
  }

  async logout(): Promise<void>{
    this.isAuthenticated.next(false);
    localStorage.clear();
  }
}
