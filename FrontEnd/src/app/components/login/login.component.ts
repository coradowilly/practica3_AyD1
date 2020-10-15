import { Component, HostBinding, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){

  }

  isError(str:string){

  }

  isSuccess(str:string){

  }

}
