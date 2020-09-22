import { TestBed } from '@angular/core/testing';

import { LoginLogic } from './login-logic.service';

describe('LoginLogic', () => {
  let service: LoginLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
