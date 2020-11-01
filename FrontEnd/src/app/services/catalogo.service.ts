import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  public getAllCards()
  {
    return this.http.get('https://my-json-server.typicode.com/CoffeePaw/AyD1API/Card');
  }

}
