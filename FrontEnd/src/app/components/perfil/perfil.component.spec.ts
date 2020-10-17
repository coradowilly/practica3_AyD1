import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PerfilComponent } from './perfil.component';

class MockRegister{

  user:any = {
    nombre:"",
    apellido: "",
    email:"",
    password:"",
    celular:"",
    nit:"",
    direccion:""
  }

  update():boolean{
    let flag = this.queryDB(this.user);
    flag ? this.isSuccess("Actualizado correctamente") : this.isError("No se pudo actualizar");
    return flag;
  }

  isError(str:string){
    alert(str);
  }

  isSuccess(str:string){
    alert(str);
  }

  queryDB(user:any):boolean{
    if(this.user.nombre != "" && this.user.apellido != "" && this.user.email != "" && this.user.nombre != "" &&
      this.user.password != "" && this.user.celular != "" && this.user.nit != "" && this.user.direccion != "" ){
      return true;
    } else {
      return false;
    }
  }
}

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let service: MockRegister;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ PerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new MockRegister();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Unit Test 
  // Mock Registro 
  describe("Given: El usuario intenta actualizar su perfil", ()=>{
    describe("When: Da click al botón",()=>{
      describe("Then: Retorna un valor booleano",()=>{
        it("Expect update return true",()=>{
          let user:any = {
            nombre:"Alvin",
            apellido: "Espino",
            email:"alvine@gmail.com",
            password:"12345",
            celular:"77788800",
            nit:"987654S",
            direccion:"usac ingenieria"
          }
          service.user = user;
          expect(service.update()).toEqual(true);
        });
      });
    });
  });

  describe("Given: El usuario intenta actualizar su perfil", ()=>{
    describe("When: Da click al botón",()=>{
      describe("Then: Retorna un valor booleano",()=>{
        it("Expect update return false",()=>{
          let user:any = {
            nombre:"",
            apellido: "",
            email:"",
            password:"",
            celular:"",
            nit:"",
            direccion:""
          }
          service.user = user;
          expect(service.update()).not.toEqual(true);
        });
      });
    });
  });

});
