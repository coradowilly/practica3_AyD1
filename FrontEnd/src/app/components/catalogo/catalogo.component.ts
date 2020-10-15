import { Component, OnInit } from '@angular/core';
import {carrito} from '../../models/carrito';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit 
{

  public cards:any;
  public carrito: Array<carrito>; 

  constructor() 
  { 
      /** Codigo constructor -- */
      this.carrito = new Array<carrito>();
      this.showCatalog();
  }

  ngOnInit(): void 
  {
      /** Codigo -- */
  }

  public showCatalog():any
  {
    
  }

  public addCarrito(item:any)
  {
      
  }

}
