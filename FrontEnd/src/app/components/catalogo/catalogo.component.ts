import { Component, OnInit } from '@angular/core';
import {carrito} from '../../models/carrito';
import {CatalogoService} from '../../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit 
{

  public cards:any;
  public carrito: Array<carrito>; 

  constructor(private catalogoservice:CatalogoService) 
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
        /*{ id:1, name: "card1", image: "image1", chargeRate: "chargeRate1", Active:"Ative1", availability:"availability1" },
        { id:2, name: "card2", image: "image2", chargeRate: "chargeRate2", Active:"Ative2", availability:"availability2" },
        { id:3, name: "card3", image: "image3", chargeRate: "chargeRate3", Active:"Ative3", availability:"availability3" }*/
      ];
    
      this.catalogoservice.getAllCards().subscribe(
        (res) =>
        {
          console.log('Respuesta Node',res);
          let aux_res:any = res;
          for (let index = 0; index < aux_res.length; index++) 
          {
            const element = aux_res[index];
            let avai:any = element.availability;
            for (let j = 0; j < avai.length; j++) 
            {
              const elemento = avai[j];
              let nodo = { 
                id:element.id, name: element.name, image: element.image, chargeRate: element.chargeRate, Active:element.active, availability:elemento 
              };
              this.cards.push(nodo);
            }
          }
          //this.cards = res;
        },
        (error) =>
        {
          console.log(error)
        }
      );  
  }

  public addCarrito(item:any)
  {
      let aux:carrito = 
      { 
        id:item.id, name: item.name, image: item.image, chargeRate: item.chargeRate, Active:item.Active, availability:item.availability 
      };
      this.carrito.push(aux);
      localStorage.setItem("carrito",JSON.stringify(this.carrito));
      console.log(this.carrito);
  }

}
