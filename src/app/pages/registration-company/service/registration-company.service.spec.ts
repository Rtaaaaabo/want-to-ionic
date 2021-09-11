import { TestBed } from '@angular/core/testing';

import { RegistrationCompanyService } from './registration-company.service';

describe('RegistrationCompanyService', () => {
  let service: RegistrationCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationCompanyService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
