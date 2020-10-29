import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import ip  from './IP'

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient) { }

  public newTarjeta(tarjeta:any)
  {
      /**  */
      return this.http.post(ip + "registrartarjeta", tarjeta);
  }

  public getAllTarjetasCredito(id:any)
  {
    return this.http.post(ip + "obtenerdatostarjeta", id);
  }
}
