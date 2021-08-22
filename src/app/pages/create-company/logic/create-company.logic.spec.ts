import { TestBed } from '@angular/core/testing';

import { CreateCompanyLogic } from './create-company.logic';

describe('CreateCompanyService', () => {
  let logic: CreateCompanyLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(CreateCompanyLogic);
  });

  it('should be created', () => {
    expect(logic).toBeTruthy();
  });
});
