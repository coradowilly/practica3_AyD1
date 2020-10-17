import { Component, OnInit } from '@angular/core';
import {regalo} from '../../models/regalo';
import {Router} from "@angular/router"
import {RegaloService} from '../../services/regalo.service';

@Component({
  selector: 'app-regalo',
  templateUrl: './regalo.component.html',
  styleUrls: ['./regalo.component.css']
})
export class RegaloComponent implements OnInit 
{

  public gift:regalo = 
  {
    id_card : "",
    id_beneficiario : "",
    id_regaldor : ""
  };

  public gifts:any;

  constructor(private regaloService:RegaloService, private router: Router) 
  { 
    /** Codigo de constructor -- */
  }

  ngOnInit(): void 
  {
      /** Codigo de ngOnInit -- */
  }

  public cargarTarjetas()
  {
      /** Codigo de cargarTarjetas -- */
      
      this.regaloService.getTarjetas().subscribe(
        (res) =>
        {
          console.log(res);
          this.gifts = res;
        },
        (error) =>
        {
          console.log(error)
        }
      ); 
  }

  public regalar()
  {
      if (this.gift.id_card != "") 
      {

      } 
      else 
      {
          this.gift.id_card = "vacio";
      }
  }

}
