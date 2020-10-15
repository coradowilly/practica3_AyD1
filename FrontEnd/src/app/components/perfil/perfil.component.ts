import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  newUser:any = {
    nombre:"Alvin",
    apellido: "Espino",
    email:"alvine@gmail.com",
    password:"54321",
    celular:"88877700",
    nit:"123sa5-5",
    direccion:"usac ingenieria"
  }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  actualizar(){
    
  }

  isError(str:string){

  }

  isSuccess(str:string){

  }

}
