import { TestBed } from '@angular/core/testing';

import { TaskDetailServiceService } from './task-detail-service.service';

describe('TaskDetailServiceService', () => {
  let service: TaskDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
