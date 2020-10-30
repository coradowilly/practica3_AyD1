import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  API_URI = 'http://18.206.168.172:3002/api';

  constructor(private http: HttpClient) { }

  update(user:any){
    return this.http.put(`${this.API_URI}/editperfil`,user);
  }
  
}
