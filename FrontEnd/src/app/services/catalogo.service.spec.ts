import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CatalogoService } from './catalogo.service';

describe('CatalogoService', () => {
  let service: CatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, HttpClientTestingModule] });
    service = TestBed.inject(CatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
