import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {creditcard} from '../../models/creditcard';
import { PagoComponent } from './pago.component';

describe('PagoComponent', () => {
  let component: PagoComponent;
  let fixture: ComponentFixture<PagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [],
      declarations: [ PagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Given: Dados los datos de la tarjeta de credito del cliente", function(){  
    describe("When: El cliente ingresa sus datos de su tarjeta de credito", function(){
      describe("Then: La variable credit_card estara inicializada", function(){
          it('Muestra ', () => {
              component.validarTarjeta();
              expect(component.credit_card).toBeDefined();
          });
      });
    });
  });

});
