import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: any = {
    correo: '',
    contrasena: '',
  };

  constructor(private router: Router, private service:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user)
    this.service.login(this.user)
    .subscribe(
      res=>{
        this.isSuccess("Loggeado con éxito");
        this.router.navigate(['/']);
      },
      err=>{
        this.isError("Las credenciales no son correctas");
      }
    );
  }

  isError(str:string){
    alert(str);
  }

  isSuccess(str:string){
    alert(str);
  }

}
