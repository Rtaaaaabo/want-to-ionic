import { TestBed } from '@angular/core/testing';

import { TaskLogicService } from './task-logic.service';

describe('TaskLogicService', () => {
  let service: TaskLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
