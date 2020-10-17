import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';

class MockLogin{

  tmpUser:any = {
    email:'usertemp@gmail.com',
    password:'12345'
  };

  userCurrent:any = {
    email:'',
    password:''
  };  

  login():boolean{
    // simulation login service
    let flag = this.queryDB(this.userCurrent);
    flag ? this.isSuccess("Login Successful") : this.isError("Invalid credentials");
    return flag;
  }

  isError(str:string){
    alert(str);
  }

  isSuccess(str:string){
    alert(str);
  }

  queryDB(user:any):boolean{
    if(this.tmpUser.email == this.userCurrent.email && this.tmpUser.password == this.userCurrent.password){
      return true;
    } else {
      return false;
    }
  }

}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service : MockLogin;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    service = new MockLogin();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Unit Test 
  // Mock Login
  describe("Given: El usuario intenta iniciar sesion", ()=>{
    describe("When: Da click al botón",()=>{
      describe("Then: Retorna un valor booleano",()=>{
        it("Expect login return true",()=>{
          let correctUser:any = {
            email:'usertemp@gmail.com',
            password:'12345'
          }  
          service.userCurrent = correctUser;
          expect(service.login()).toEqual(true);
        });
      });
    });
  });

  describe("Given: El usuario intenta iniciar sesion", ()=>{
    describe("When: Da click al botón",()=>{
      describe("Then: Retorna un valor booleano",()=>{
        it("Expect login return false",()=>{
          let inCorrectUser:any = {
            email:'usertemp@gmail.com',
            password:'54321'
          }
          service.userCurrent = inCorrectUser;
          expect(service.login()).not.toEqual(true);
        });
      });
    });
  });
});
