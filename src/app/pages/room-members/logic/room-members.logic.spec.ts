import { TestBed } from '@angular/core/testing';

import { RoomMembersLogic } from './room-members.logic';

describe('RoomMembersService', () => {
  let service: RoomMembersLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomMembersLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
