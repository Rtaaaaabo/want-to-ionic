import { TestBed } from '@angular/core/testing';

import { OwnTaskLogic } from './own-task.service';

describe('OwnTaskService', () => {
  let logic: OwnTaskLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(OwnTaskLogic);
  });

  it('should be created', () => {
    expect(logic).toBeTruthy();
  });
});
