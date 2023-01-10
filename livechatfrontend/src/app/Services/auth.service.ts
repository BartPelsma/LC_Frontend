import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:7015/Account/"
  helper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + "Loginform", model).pipe(
      map((response: any) => {
        const user = response;
        
        localStorage.setItem("AuthenticationToken", user.token);
        localStorage.setItem("AccountName", user.accountname);
        
      })
    );
  }

  loggedin() {
    const token = localStorage.getItem("AuthenticationToken")!;
    return !this.helper.isTokenExpired(token);
  }

  register(model: any) {
    return this.http.post(this.authUrl + "Registerform", model);
  }

  logout() {
    localStorage.removeItem('AuthenticationToken');
  }
}
