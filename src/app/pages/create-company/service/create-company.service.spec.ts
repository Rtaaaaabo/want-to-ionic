import { TestBed } from '@angular/core/testing';

import { CreateCompanyService } from './create-company.service';

describe('ServiceService', () => {
  let service: CreateCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCompanyService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
