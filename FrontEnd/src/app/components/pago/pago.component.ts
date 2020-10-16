import { Component, OnInit } from '@angular/core';
import {creditcard} from '../../models/creditcard';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit 
{

  public credit_card:creditcard = 
  {
      no:"",
      date:"",
      cvv:"",
      name:"",
      monto:"" ,
      moneda:""
  };

  constructor() 
  { 
      /** Codigo constructor -- */
  }

  ngOnInit(): void 
  {
      /** Codigo ngOnInit -- */
  }

  public validarTarjeta()
  {
      
  }

}
