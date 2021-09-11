import { TestBed } from '@angular/core/testing';

import { TaskLogic } from './task.logic';

describe('TaskLogicService', () => {
  let service: TaskLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskLogic);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
