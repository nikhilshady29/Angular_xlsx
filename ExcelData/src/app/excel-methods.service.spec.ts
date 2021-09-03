import { TestBed } from '@angular/core/testing';

import { ExcelMethodsService } from './excel-methods.service';

describe('ExcelMethodsService', () => {
  let service: ExcelMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
