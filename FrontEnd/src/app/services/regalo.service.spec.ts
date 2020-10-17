import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegaloService } from './regalo.service';

describe('RegaloService', () => {
  let service: RegaloService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, HttpClientTestingModule] });
    service = TestBed.inject(RegaloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
