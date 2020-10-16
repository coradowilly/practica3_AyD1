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
      if ((this.credit_card.no != "") && (this.credit_card.cvv != "")) 
      {
          /** Codigo para usar servicio */
      } 
      else 
      {
          this.credit_card.no = "null";
          this.credit_card.cvv = "null"
      }
  }

}
