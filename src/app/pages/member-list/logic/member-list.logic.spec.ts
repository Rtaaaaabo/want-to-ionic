import { TestBed } from '@angular/core/testing';

import { MemberListLogic } from './member-list.logic';

describe('MemberListLogic', () => {
  let service: MemberListLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberListLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
