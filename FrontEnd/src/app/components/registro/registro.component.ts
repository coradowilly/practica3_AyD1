import { Component, HostBinding, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  newUser:any = {
    nombre:"",
    apellido: "",
    email:"",
    password:"",
    celular:"",
    nit:"",
    direccion:""
  }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registrar(){
    
  }

  isError(str:string){

  }

  isSuccess(str:string){

  }

}
