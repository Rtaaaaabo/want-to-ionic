import { TestBed } from '@angular/core/testing';

import { TaskDetailLogic } from './task-detail.logic';

describe('TaskDetailLogicService', () => {
  let service: TaskDetailLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDetailLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
