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

  loadToken(): void{
    const token = localStorage.getItem('token');

    if (token){
      this.token = token;
      this.isAuthenticated.next(true);
    }else{
      this.isAuthenticated.next(false)
    }
  }

  logout(): void{
    this.isAuthenticated.next(false);
    localStorage.clear();
  }
}
