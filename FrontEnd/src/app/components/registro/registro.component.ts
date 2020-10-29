import { Component, HostBinding, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  newUser:any = {
    username:"",
    email: "",
    password:"",
    firstname:"",
    lastname:"",
    dpi:"",
    age:""
  }
  
  constructor(private router: Router,private servicio:RegistroService) { }

  ngOnInit(): void {
  }

  registrar(){
    if(this.newUser.email != ""){
      this.servicio.sigup(this.newUser)
      .subscribe(
        res=>{
          this.isSuccess("Registrado con exito");
          this.router.navigate(['/login']);
        },
        err=>{
          this.isError("Revisa tus datos");
        }
      )
    }
  }

  isError(str:string){
    alert(str)
  }

  isSuccess(str:string){
    alert(str)
  }

}
