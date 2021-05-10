import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavDataService {

  private navData = new BehaviorSubject(JSON.parse(localStorage.getItem('favorites') || '[]').length);
  currentData = this.navData.asObservable();

  constructor() { }

  updateCounterFav() {
    var cont = JSON.parse(localStorage.getItem('favorites') || '[]').length;
    this.navData.next(cont)
    }
}
