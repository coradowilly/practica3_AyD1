import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { PerfilService } from '../../services/perfil.service';

import { PerfilComponent } from './perfil.component';

class MockRegister{

  user:any = {
      id: 0, 
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      dpi: 0,
      age: 0
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
    if(user.id != 0 && user.username != "" && user.email != "" && user.password != "" 
    && user.firstname != "" && user.lastname != "" && user.dpi != 0 && user.age != 0){
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
      imports: [ RouterTestingModule, HttpClientTestingModule, HttpClientModule ],
      declarations: [ PerfilComponent ],
      providers: [ PerfilService ]
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
    const servicePerfil:PerfilService = TestBed.get(PerfilService)
    expect(component).toBeTruthy();
  });

  // Unit Test 
  // Mock Registro 
  describe("Given: El usuario intenta actualizar su perfil (Mock)", ()=>{
    describe("When: Da click al botón",()=>{
      describe("Then: Retorna un valor booleano",()=>{
        it("Expect update return true",()=>{
          let user:any = {
            id: 1, 
            username: "alvmilio",
            email: "alvmilio0497@gmail.com",
            password: "efe123",
            firstname: "Alvin",
            lastname: "Alegría",
            dpi: 123,
            age: 24
          }
          service.user = user;
          expect(service.update()).toEqual(true);
        });
      });
    });
  });

  describe("Given: El usuario intenta actualizar su perfil (Mock)", ()=>{
    describe("When: Da click al botón",()=>{
      describe("Then: Retorna un valor booleano",()=>{
        it("Expect update return false",()=>{
          let user:any = {
            id: 0, 
            username: "",
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            dpi: 0,
            age: 0
          }
          service.user = user;
          expect(service.update()).not.toEqual(true);
        });
      });
    });
  });

  describe("Given: El usuario intenta actualizar su perfil", ()=>{
    describe("When: Da click al botón",()=>{
      describe("Then: Retorna un valor booleano",()=>{
        it("Expect update return true",()=>{
          let user:any = {
            id: 1, 
            username: "alvmilio",
            email: "alvmilio0497@gmail.com",
            password: "efe123",
            firstname: "Alvin",
            lastname: "Alegría",
            dpi: 123,
            age: 24
          }
          component.newUser = user;
          expect(component.actualizar()).toBeUndefined();
        });
      });
    });
  });

});
