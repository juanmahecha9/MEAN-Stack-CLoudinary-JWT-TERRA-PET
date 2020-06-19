import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private URL = 'http://localhost:8001/api';
  private URL = 'https://userbackenddata.herokuapp.com/api'
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user) {
    return this.http.post<any>(this.URL + '/new', user);
  }

  signInUser(user) {
    return this.http.post<any>(this.URL + '/login', user);
  }
  update(user) {
    return this.http.post<any>(this.URL + '/actualizar/:id', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/team']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
