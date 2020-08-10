import { TestBed } from '@angular/core/testing';

import { SignupLogicService } from './signup-logic.service';

describe('SignupLogicService', () => {
  let service: SignupLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
