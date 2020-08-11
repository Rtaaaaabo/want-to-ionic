import { TestBed } from '@angular/core/testing';

import { LoginLogicService } from './login-logic.service';

describe('LoginLogicService', () => {
  let service: LoginLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
