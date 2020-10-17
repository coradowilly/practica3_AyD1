import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {HistorialService} from '../../services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit 
{

  public historial:any;

  constructor(private historialService:HistorialService, private router: Router) 
  { 
      /** Codigo de constructor -- */
  }

  ngOnInit(): void 
  {
      /** Codigo de ngOnInit -- */
  }

  public showHistorial() 
  { 
      /** Codigo de showHistorial -- */
      
      this.historialService.getHistorial().subscribe(
        (res) =>
        {
          console.log(res);
          this.historial = res;
        },
        (error) =>
        {
          console.log(error)
        }
      ); 
  }

}
