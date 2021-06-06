import { TestBed } from '@angular/core/testing';

import { MainRegistrationCompanyLogic } from './main-registration-company.logic';

describe('MainRegistrationCompanyService', () => {
  let logic: MainRegistrationCompanyLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(MainRegistrationCompanyLogic);
  });

  it('should be created', () => {
    expect(logic).toBeTruthy();
  });
});
