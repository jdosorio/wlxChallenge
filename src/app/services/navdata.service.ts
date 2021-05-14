import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavDataService {

  private navData = new BehaviorSubject(this.convertObject().length);
  currentData = this.navData.asObservable();

  updateCounterFav(): void {
    const cont = this.convertObject().length;
    this.navData.next(cont);
  }

  convertObject(): string[]{
    return JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
  }
}
