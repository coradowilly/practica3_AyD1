import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { carrito } from 'src/app/models/carrito';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public cards:any;
  public user:any;
  public cardsCat:any;
  public carrito: Array<carrito>; 

  constructor(private router:Router, private transaccionService:TransaccionService, private catalogoservice:CatalogoService) 
  { 
      /** Codigo de constructor -- */ 
      if (JSON.parse(localStorage.getItem('user')) != null) 
      {
          this.user = JSON.parse(localStorage.getItem('user'));
      }
      else
      {
          this.user = { id: 1 };
      }
      this.showHistorial();
      this.carrito = new Array<carrito>();
      this.showCatalog();
  }

  ngOnInit(): void 
  {
    if(localStorage.getItem("user") == null){
      console.log(localStorage.getItem("user"))
      this.router.navigate(['/']);
    }
      /** Codigo de ngOnInit -- */
  }

  public showHistorial() 
  { 
      /** Codigo de showHistorial -- */
      this.transaccionService.getcompras().subscribe(
        (res) =>
        {
          console.log(res);
          this.cards = res;
        },
        (error) =>
        {
          console.log(error)
        }
      ); 
  }

  public showCatalog():any
  {
      this.cardsCat = 
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
              this.cardsCat.push(nodo);
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
