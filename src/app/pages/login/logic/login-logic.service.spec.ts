import { TestBed } from '@angular/core/testing';

import { LoginLogic } from './login-logic.service';

describe('LoginLogic', () => {
  let service: LoginLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLogic);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
