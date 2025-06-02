import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id: number;
  userName: string;
  userPassword?: string; // Passwords usually shouldn't be in frontend types
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private loginUrl = 'http://localhost:8080/user/login';
   private addUserUrl = 'http://localhost:8080/user/adduser';
   private getDataUrl = 'http://localhost:8080/user/getdata';

  constructor(private http: HttpClient) { }

 login(username: string, password: string): Observable<string> {
    const body = { username, password };
    console.log('Sending login request:', body);
    return this.http.post(this.loginUrl, body, { responseType: 'text' }) as Observable<string>;
  }
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.addUserUrl, user);
  }

  getData(): Observable<User[]> { // Expecting an array of User objects
    return this.http.get<User[]>(this.getDataUrl);
  }
}