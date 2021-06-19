import { TestBed } from '@angular/core/testing';

import { RegistrationCompanyService } from './registration-company.service';

describe('RegistrationCompanyService', () => {
  let service: RegistrationCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
