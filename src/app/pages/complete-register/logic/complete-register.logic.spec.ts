import { TestBed } from '@angular/core/testing';

import { CompleteRegisterLogic } from './complete-register.logic';

describe('CompleteRegisterService', () => {
  let logic: CompleteRegisterLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(CompleteRegisterLogic);
  });

  it('should be created', () => {
    expect(logic).toBeTruthy();
  });
});
