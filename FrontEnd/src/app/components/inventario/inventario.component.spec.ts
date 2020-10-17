import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InventarioComponent } from './inventario.component';

class MockedStock 
{
    inventario:any = { mock:"mocked!" };
    getInventario()
    {
        return this.inventario;
    }
}

describe('InventarioComponent', () => {
  let component: InventarioComponent;
  let fixture: ComponentFixture<InventarioComponent>;

  let service:MockedStock;
  let componente: InventarioComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MockedStock],
      declarations: [ InventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = new MockedStock();  // <-- instancia del mock
    fixture = TestBed.createComponent(InventarioComponent);
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
              service.inventario = { mock:"mocked!" };
              component.inventario = service.getInventario();
              component.showInventario();
              expect(component.inventario).toEqual(service.getInventario());
          });
      });
    });
  });

});
