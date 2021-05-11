import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { EnumTechnologyItems } from 'src/app/screens/technologies/interfaces/technology.interface';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(
    private http: HttpClient
  ) { }

  getList(): Observable<EnumTechnologyItems> {
    return this.http.get<EnumTechnologyItems>(`${environment.apiUrl}/techs`);
  }
}
