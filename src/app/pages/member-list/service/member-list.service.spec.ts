import { TestBed } from '@angular/core/testing';

import { MemberListService } from './member-list.service';

describe('MemberListService', () => {
  let service: MemberListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberListService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
