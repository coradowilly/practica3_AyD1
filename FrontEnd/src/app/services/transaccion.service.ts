import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ip from './IP'

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private http: HttpClient) { }

  getcompras(){
    return this.http.get(`${ip}/getCompras`);
  }
}
