import { TestBed } from '@angular/core/testing';

import { CompleteRegisterService } from './complete-register.service';

describe('CompleteRegisterService', () => {
  let service: CompleteRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
