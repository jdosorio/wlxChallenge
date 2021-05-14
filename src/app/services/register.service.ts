import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { User } from 'src/app/screens/register/interfaces/user.interface';
import { Token } from 'src/app/interfaces/global.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}/signup`, user);
  }
}
