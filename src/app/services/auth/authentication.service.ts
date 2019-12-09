import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  AUTH_TOKEN_SESSION_ATTRIBUTE_NAME = 'authToken'  

  constructor(private http: HttpClient) { }

  authenticationService(username: String, password: String): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.createBasicAuthToken(username, password) });
    const options = { headers: headers };
    
    return this.http.post('http://localhost:8080/authenticate', null, options);
  }

  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.AUTH_TOKEN_SESSION_ATTRIBUTE_NAME, window.btoa(username + ':' + password));        
  }  

  isUserLoggedIn() {
    let authToken = sessionStorage.getItem(this.AUTH_TOKEN_SESSION_ATTRIBUTE_NAME)
    if (authToken) return true;
    return false;
  }
}