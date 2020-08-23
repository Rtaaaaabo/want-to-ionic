import { TestBed } from '@angular/core/testing';

import { TaskDetailLogicService } from './task-detail-logic.service';

describe('TaskDetailLogicService', () => {
  let service: TaskDetailLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDetailLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
