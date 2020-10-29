import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import ip  from './IP'

@Injectable({
  providedIn: 'root'
})
export class HistorialService 
{

  API_URI = 'http://52.15.119.221:3000/api/ruta';

  constructor(private http: HttpClient) 
  { 
      /** constructor */
  }

  getHistorial(id:any)
  {
    return this.http.post(ip + "", id);
  }
  
}
