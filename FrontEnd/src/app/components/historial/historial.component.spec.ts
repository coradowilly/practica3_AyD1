import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HistorialComponent } from './historial.component';
import {HistorialService} from '../../services/historial.service';

class MockedHistory 
{
    card:any = { mock:"mocked!" };
    getHistorial()
    {
        return this.card;
    }
}

describe('HistorialComponent', () => {
  let component: HistorialComponent;
  let fixture: ComponentFixture<HistorialComponent>;
  let service:MockedHistory;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MockedHistory],
      declarations: [ HistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = new MockedHistory();  // <-- instancia del mock
    fixture = TestBed.createComponent(HistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Given: Dados los datos de historial de compra del cliente obtenidos de la API", function(){  
    describe("When: La pagina carga", function(){
      describe("Then: La variable 'historial' obtiene valores de la API", function(){
          it('Muestra ', () => {
              service.card = { mock:"mocked!" };
              component.historial = service.getHistorial();
              component.showHistorial();
              expect(component.historial).toBeDefined();
          });
      });
    });
  });

});
