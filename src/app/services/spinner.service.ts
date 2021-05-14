import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private dataSource = new BehaviorSubject<boolean>(false);
  isLoading = this.dataSource.asObservable();

  showLoading(value: boolean): void {
    this.dataSource.next(value);
  }
}
