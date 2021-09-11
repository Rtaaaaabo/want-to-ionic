import { TestBed } from '@angular/core/testing';

import { ConfirmLogic } from './confirm.logic';

describe('ConfirmLogic', () => {
  let logic: ConfirmLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(ConfirmLogic);
  });

  test('should be created', () => {
    expect(logic).toBeTruthy();
  });
});
