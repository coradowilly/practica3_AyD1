import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import ip  from './IP'

@Injectable({
  providedIn: 'root'
})
export class HistorialService 
{

  constructor(private http: HttpClient) 
  { 
      /** constructor */
  }

  getHistorial(id:any)
  {
    return this.http.get(ip + "getHistorial/" + id);
  }
  
}
