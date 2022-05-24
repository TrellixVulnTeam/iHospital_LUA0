import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  login(data: any): Observable<any> {
    return this._http.post('http://127.0.0.1:3000/users/login', data, {
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json')
    });
  }

  registra(body:any): Observable<any> {
    return this._http.post('http://127.0.0.1:3000/users/registrati', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-type', 'application/json')
    });
  }

  userLogged(): Observable<any> {
    let headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this._http.get('http://127.0.0.1:3000/users/user-logged', {
      withCredentials: true,
      headers: headers
    });
  }

  findByEmail(email: string | null): Observable<any> {
    return this._http.get('http://127.0.0.1:3000/users/find-email/'+email);
  }

  findById(id: string | null): Observable<any> {
    return this._http.get('http://127.0.0.1:3000/users/find-id/'+id);
  }

}
