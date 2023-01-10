import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Dialog } from '../Models/dialog';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  authUrl = "http://localhost:5260/"
  helper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  getdialogs(model: Array<Dialog>) {
    return this.http.get(this.authUrl + "Dialog/AccountID", ).pipe(
      map((response: any) => {
        const user = response;
        
        console.log(response);
        // localStorage.setItem("AuthenticationToken", user.token);
        // localStorage.setItem("AccountName", user.accountname);``
        
      })
    );
  }

  getdialogsByAccountId(token: any) {

    console.log(token);
    return this.http.get<Array<any>>(`${this.authUrl}Dialog/${token}`, { observe: 'response' });
  }

}
