import { Component, OnInit } from '@angular/core';
import {InventarioService} from '../../services/inventario.service';
import {beneficiario} from './beneficiario';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit 
{

  public user:any;
  public cards:any;
  public id_beneficiario:beneficiario = { id: '' };

  constructor(private inventario_service:InventarioService) 
  { 
      /** Codigo de constructor -- */
      if (JSON.parse(localStorage.getItem('usuario')) != null) 
      {
          this.user = JSON.parse(localStorage.getItem('usuario'));
      }
      else
      {
          this.user = { id: 1 };
      }
      this.showInventario();
  }

  ngOnInit(): void 
  {
      /** Codigo de ngOnInit -- */
  }

  public showInventario() 
  { 
      /** Codigo de showInventario -- */
      console.log('usuario: ' + this.user)
      this.inventario_service.getInventario(this.user.id).subscribe(
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

  public regalar (item:any)
  {
      console.log(item);
      this.inventario_service.regalarTarjeta(item.id, item.ownerId, this.id_beneficiario.id).subscribe(
        (res) =>
        {
          console.log(res);
        },
        (error) =>
        {
          console.log(error)
        }
      );     
  }

}
