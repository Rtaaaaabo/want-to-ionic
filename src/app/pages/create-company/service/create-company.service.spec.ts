import { TestBed } from '@angular/core/testing';

import { CreateCompanyService } from './create-company.service';

describe('ServiceService', () => {
  let service: CreateCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
