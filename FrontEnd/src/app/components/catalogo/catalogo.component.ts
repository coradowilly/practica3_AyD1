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
      this.cards = 
      [
        { id:1, name: "card1", image: "image1", chargeRate: "chargeRate1", Active:"Ative1", availability:"availability1" },
        { id:2, name: "card2", image: "image2", chargeRate: "chargeRate2", Active:"Ative2", availability:"availability2" },
        { id:3, name: "card3", image: "image3", chargeRate: "chargeRate3", Active:"Ative3", availability:"availability3" }
      ];
    /*
    this.catalogo.getProductos().subscribe(
      (res) =>
      {
        console.log('Respuesta Node',res);
        this.cards = res;
      },
      (error) =>
      {
        console.log(error)
      }
    );*/   
  }

  public addCarrito(item:any)
  {
      let aux:carrito = 
      { 
        id:item.id, name: item.name, image: item.image, chargeRate: item.chargeRate, Active:item.Active, availability:item.availability 
      };
      this.carrito.push(aux);
      console.log(aux);
  }

}
