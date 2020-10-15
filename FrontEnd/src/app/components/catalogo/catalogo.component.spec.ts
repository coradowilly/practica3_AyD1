import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {carrito} from '../../models/carrito';
import { CatalogoComponent } from './catalogo.component';

fdescribe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [],
      declarations: [ CatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe("Given: Dados los datos obtenidos de la API", function(){  
    describe("When: La pagina carga", function(){
      describe("Then: La variable cards obtiene valores de la API", function(){
          it('Muestra ', () => {
              component.showCatalog();
              expect(component.cards).toBeDefined();
          });
      });
    });
  });

  describe("Given: El un producto se ha seleccioado", function(){  
    let CarritoSize:number;
    describe("When: El cliente selecciona un producto del catalogo", function(){
      describe("Then: El arreglo de productos se incrementa en uno", function(){
          it('Muestra ', () => {
              CarritoSize = component.carrito.length;
              let aux = { id:1024, name: "prueba", image: "prueba", chargeRate: "prueba", Active:"prueba", availability:"prueba" };
              component.addCarrito(aux);
              expect(component.carrito.length).toEqual(CarritoSize + 1);
          });
      });
    });
  });

});
