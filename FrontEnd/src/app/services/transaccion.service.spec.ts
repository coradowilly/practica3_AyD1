import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TransaccionService } from './transaccion.service';

describe('TransaccionService', () => {
  let service: TransaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TransaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
