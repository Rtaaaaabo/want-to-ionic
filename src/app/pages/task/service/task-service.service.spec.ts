import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskServiceService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
