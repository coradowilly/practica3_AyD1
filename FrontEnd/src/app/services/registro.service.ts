import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  API_URI = 'http://18.206.168.172:3002/api/';

  constructor(private http: HttpClient) { }

  sigup(user:any){
    return this.http.post(`${this.API_URI}/registro`,user);
  }
}
