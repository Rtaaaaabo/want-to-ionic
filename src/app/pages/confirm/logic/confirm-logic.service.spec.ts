import { TestBed } from '@angular/core/testing';

import { ConfirmLogicService } from './confirm-logic.service';

describe('ConfirmLogicService', () => {
  let service: ConfirmLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
