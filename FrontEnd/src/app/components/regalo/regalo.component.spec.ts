import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegaloComponent } from './regalo.component';

class MockedGift
{
    gift:any = { mock:"mocked!" };
    getTarjetas()
    {
        return this.gift;
    }
}

describe('RegaloComponent', () => {
  let component: RegaloComponent;
  let fixture: ComponentFixture<RegaloComponent>;
  let service:MockedGift;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MockedGift],
      declarations: [ RegaloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = new MockedGift();  // <-- instancia del mock
    fixture = TestBed.createComponent(RegaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe("Given: Dados los datos de las card disponibles del cliente obtenidos de la API", function(){  
    describe("When: La pagina carga", function(){
      describe("Then: La variable 'gift' obtiene valores de la API", function(){
          it('Muestra ', () => {
              service.gift = { mock:"mocked!" };
              component.gifts = service.getTarjetas();
              component.cargarTarjetas();
              expect(component.gifts).toBeDefined();
          });
      });
    });
  });

  describe("Given: Dados una gift que se desea regalar", function(){  
    describe("When: El cliente seleccione una tarjeta", function(){
      describe("Then: La variable 'gift' se define", function(){
          it('Muestra ', () => {
              component.regalar();
              expect(component.gift).toBeDefined();
          });
      });
    });
  });

});
