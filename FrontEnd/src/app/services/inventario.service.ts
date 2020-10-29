import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import ip from './IP';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) 
  { 
      /** constructor */
  }

  getInventario(id:any)
  {
      return this.http.get(ip + "giftcards/" + id);
  }

  regalarTarjeta(id_tarjeta:any, id:any, id_benefiario:any)
  {
      return this.http.post(ip + "giftcards/changeOwner/" + id_tarjeta + '/' + id + '/' + id_benefiario, '');
  }

}
