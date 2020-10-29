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
  public user:any;

  constructor(private historialService:HistorialService, private router: Router) 
  { 
      /** Codigo de constructor -- */
      if (JSON.parse(localStorage.getItem('usuario')) != null) 
      {
          this.user = JSON.parse(localStorage.getItem('usuario'));
      }
      else
      {
          this.user = { id: 0 };
      }
  }

  ngOnInit(): void 
  {
      /** Codigo de ngOnInit -- */
  }

  public showHistorial() 
  { 
      /** Codigo de showHistorial -- */
      let id = this.user.id;
      this.historialService.getHistorial(id).subscribe(
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
