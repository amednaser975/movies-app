import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserData } from '../_models/userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mySubject =  new BehaviorSubject(null);
  constructor(public _HttpClient: HttpClient) { }

  signUp(data): Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', data);
  }
  signIn(data): Observable<any> 
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', data);
  }

  saveData(citizen, token) 
  {

    let userData = new UserData(citizen.first_name, citizen.last_name, citizen.email, token)
    localStorage.setItem('token', token);

    this.mySubject.next(userData);

  }
}
