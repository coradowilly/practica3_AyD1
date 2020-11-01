import { Component, OnInit } from '@angular/core';
import {HistorialService} from '../../services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit 
{

  public cards:any;
  public user:any;

  constructor(private historialService:HistorialService) 
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
          this.cards = res;
        },
        (error) =>
        {
          console.log(error)
        }
      ); 
  }

}
