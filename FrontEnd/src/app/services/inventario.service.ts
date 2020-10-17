import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  API_URI = 'http://52.15.119.221:3000/api/ruta';

  constructor(private http: HttpClient) 
  { 
      /** constructor */
  }

  getInventario()
  {
      return this.http.get(`${this.API_URI}`);
  }

}
