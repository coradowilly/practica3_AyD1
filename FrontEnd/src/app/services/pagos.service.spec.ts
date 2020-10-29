import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PagosService } from './pagos.service';

describe('PagosService', () => {
  let service: PagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, HttpClientTestingModule] });
    service = TestBed.inject(PagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
