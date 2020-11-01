import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RegistroComponent } from './registro.component';

class MockRegister{

  newUser:any = {
    nombre:"",
    apellido: "",
    email:"",
    password:"",
    celular:"",
    nit:"",
    direccion:""
  }

  registrar():boolean{
    let flag = this.queryDB(this.newUser);
    flag ? this.isSuccess("Registrado correctamente") : this.isError("Datos invalidos");
    return flag;
  }

  isError(str:string){
    alert(str);
  }

  isSuccess(str:string){
    alert(str);
  }

  queryDB(user:any):boolean{
    if(this.newUser.nombre != "" && this.newUser.apellido != "" && this.newUser.email != "" && this.newUser.nombre != "" &&
      this.newUser.password != "" && this.newUser.celular != "" && this.newUser.nit != "" && this.newUser.direccion != "" ){
      return true;
    } else {
      return false;
    }
  }
}

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let service: MockRegister;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new MockRegister();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Unit Test 
  // Mock Registro 
  describe("Given: El usuario intenta registrarse", ()=>{
    describe("When: Da click al botón",()=>{
      describe("Then: Retorna un valor booleano",()=>{
        it("Expect login return true",()=>{
          let user:any = {
            nombre:"Alvin",
            apellido: "Espino",
            email:"alvine@gmail.com",
            password:"12345",
            celular:"77788800",
            nit:"987654S",
            direccion:"usac ingenieria"
          }
          service.newUser = user;
          expect(service.registrar()).toEqual(true);
        });
      });
    });
  });

  describe("Given: El usuario intenta registrarse", ()=>{
    describe("When: Da click al botón",()=>{
      describe("Then: Retorna un valor booleano",()=>{
        it("Expect login return false",()=>{
          let user:any = {
            nombre:"",
            apellido: "",
            email:"",
            password:"",
            celular:"",
            nit:"",
            direccion:""
          }
          service.newUser = user;
          expect(service.registrar()).not.toEqual(true);
        });
      });
    });
  });

});
