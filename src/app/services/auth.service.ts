import { Injectable } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../models/TokenModel';
import { SingleResponseModel } from '../models/SingleResponselModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiurl = 'http://localhost:27392/api/auth/';

  constructor(private httpclient: HttpClient) {}

  login(LoginModel: LoginModel) {
    console.log('authservicelog');
    var toke = this.httpclient.post<SingleResponseModel<TokenModel>>(
      this.apiurl + 'login',
      LoginModel
    );
    console.log(toke);
    return toke;
  }

  isAuthenticated() {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('token')) {
        console.log('token aldım');
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
