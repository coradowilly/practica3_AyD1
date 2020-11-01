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
    email: '',
    password: '',
  };

  constructor(private router: Router, private service:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user)
    this.service.login(this.user)
    .subscribe(
      res=>{
        console.log(res)
        localStorage.setItem("user",JSON.stringify(res));
        this.isSuccess("Loggeado con éxito");
        this.router.navigate(['/catalogo']);
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

  signup(){
    this.router.navigate(['/signup']);
  }
}
