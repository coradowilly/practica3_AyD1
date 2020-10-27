import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://18.206.168.172:3002/api/';

  constructor(private http: HttpClient) { }

  login(user:any){
    return this.http.post(`${this.API_URI}/login`,user);
  }
}
