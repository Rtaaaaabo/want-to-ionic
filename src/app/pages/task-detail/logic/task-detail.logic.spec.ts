import { TestBed } from '@angular/core/testing';

import { TaskDetailLogic } from './task-detail.logic';

describe('TaskDetailLogicService', () => {
  let service: TaskDetailLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDetailLogic);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
