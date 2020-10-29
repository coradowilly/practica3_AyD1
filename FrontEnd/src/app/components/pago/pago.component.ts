import { Component, OnInit } from '@angular/core';
import {creditcard} from '../../models/creditcard';
import {PagosService} from '../../services/pagos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit 
{

    /**
     * FALTAN:
     * 01. mostrat todo el carrito
     * 02. hacer la compra tal cual eligiendo una tarjeta
     * 03. pruebas a todo
     */
    public user:any;  
    public credit_card:creditcard = 
    {
            userid:"",
            expiryDate:"",
            cvv:"",
            cardNumber:"",
            nameOnCard:"" 
    };
    public credictcards_disponibles:any;
    public carrito:any;

    constructor(private pagosservice:PagosService) 
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
        this.showAllTarjetasDisponibles();
    }

    ngOnInit(): void 
    {
        /** Codigo ngOnInit -- */
    }

    public validarTarjeta()
    {
        if ((this.credit_card.cardNumber != "") && (this.credit_card.cvv != "")) 
        {
            /** Codigo para usar servicio */
        } 
        else 
        {
            this.credit_card.cardNumber = "null";
            this.credit_card.cvv = "null"
        }
    }

    public agregarTarjeta()
    {
        this.credit_card.userid = this.user.id;
        this.pagosservice.newTarjeta(this.credit_card).subscribe(
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

    public showAllTarjetasDisponibles()
    {
      let id = { userid:this.user.id };
      this.pagosservice.getAllTarjetasCredito(id).subscribe(
        (res) =>
        {
          console.log(res);
          console.log(res instanceof Array);
          if(res instanceof Array)
          {
                this.credictcards_disponibles = res;
          }
          else
          {
                this.credictcards_disponibles = res;
          }
        },
        (error) =>
        {
          console.log(error)
        }
      ); 
    }

    public showwCarrito()
    {

    }

}
