import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  newUser:any = {
    id:0,
    username:"",
    email: "",
    password:"",
    firstname:"",
    lastname:"",
    dpi:0,
    age:0
  }
  
  constructor(private router: Router, private servicio:PerfilService) { }

  ngOnInit(): void {
    this.newUser = JSON.parse(sessionStorage.getItem("user"));
  }

  actualizar(){
    this.servicio.update(this.newUser)
    .subscribe(
      res=>{
        this.isSuccess("Actualizado con exito");
        sessionStorage.setItem("user",JSON.stringify(this.newUser));
      },
      err=>{
        this.isError("No se pudo actualizar");
      }
    )
  }

  isError(str:string){
    alert(str)
  }

  isSuccess(str:string){
    alert(str)
  }

}
