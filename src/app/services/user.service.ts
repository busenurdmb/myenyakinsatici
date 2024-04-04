import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiurl = 'http://localhost:27392/api/';

  constructor(private httpClient: HttpClient) {}

  getByMail(email: string): Observable<User> {
    let newPath = this.apiurl + 'Users/GetByMail/' + email;
    var user = this.httpClient.get<User>(newPath);
    console.log('girdi');
    return user;
  }

  // Token içindeki email bilgisini almak için bir method
  getUserEmailFromToken(token: string): string {
    const decodedToken: any = jwtDecode(token);
    return decodedToken.email;
  }
}
