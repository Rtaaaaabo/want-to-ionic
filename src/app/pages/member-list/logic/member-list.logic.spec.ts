import { TestBed } from '@angular/core/testing';

import { MemberListLogic } from './member-list.logic';

describe('MemberListLogic', () => {
  let logic: MemberListLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(MemberListLogic);
  });

  it('should be created', () => {
    expect(logic).toBeTruthy();
  });
});
