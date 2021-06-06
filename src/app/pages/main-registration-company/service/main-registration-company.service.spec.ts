import { TestBed } from '@angular/core/testing';

import { MainRegistrationCompanyService } from './main-registration-company.service';

describe('MainRegistrationCompanyService', () => {
  let service: MainRegistrationCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainRegistrationCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
