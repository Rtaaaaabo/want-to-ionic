import { TestBed } from '@angular/core/testing';

import { OwnTaskService } from './own-task.service';

describe('OwnTaskService', () => {
  let service: OwnTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnTaskService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
