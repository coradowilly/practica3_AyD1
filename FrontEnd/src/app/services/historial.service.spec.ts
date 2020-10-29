import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HistorialService } from './historial.service';

describe('HistorialService', () => {
  let service: HistorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, HttpClientTestingModule] });
    service = TestBed.inject(HistorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
