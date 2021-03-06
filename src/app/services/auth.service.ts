import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/screens/register/interfaces/user.interface';
import { Token } from 'src/app/interfaces/global.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(user: User): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}/signup`, user);
  }
}
