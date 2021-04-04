import { TestBed } from '@angular/core/testing';

import { SignupLogic } from './signup.logic';

describe('SignupLogic', () => {
  let service: SignupLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
