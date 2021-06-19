import { TestBed } from '@angular/core/testing';

import { RegistrationCompanyLogic } from './registration-company.logic';

describe('RegistrationCompanyService', () => {
  let logic: RegistrationCompanyLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(RegistrationCompanyLogic);
  });

  it('should be created', () => {
    expect(logic).toBeTruthy();
  });
});
