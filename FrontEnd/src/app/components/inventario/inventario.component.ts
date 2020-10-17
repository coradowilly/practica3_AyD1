import { Component, OnInit } from '@angular/core';
import {InventarioService} from '../../services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit 
{

  public inventario:any;

  constructor(private inventario_service:InventarioService) 
  { 
      /** Codigo de constructor -- */
  }

  ngOnInit(): void 
  {
      /** Codigo de ngOnInit -- */
  }

  public showInventario() 
  { 
    
  }

}
