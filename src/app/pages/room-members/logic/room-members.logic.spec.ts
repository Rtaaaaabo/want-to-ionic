import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RoomMembersLogic } from './room-members.logic';
import { RoomMemberService } from '../service/room-member.service';
import { SessionService } from 'src/app/shared/service/session.service';
import { ListUsersQuery } from 'src/app/shared/service/amplify.service';

import { InterfaceRoomMembers } from '../interface/room-members.interface';

describe('RoomMembersService', () => {
  let logic: RoomMembersLogic;
  let service: RoomMemberService;
  let sessionService: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(RoomMembersLogic);
    service = TestBed.inject(RoomMemberService);
    sessionService = TestBed.inject(SessionService);
  });

  describe('テスト準備', () => {
    test('RoomMembersLogicがインスタンス化されていること', () => {
      expect(logic).toBeTruthy();
    });

    test('RoomMemberServiceがインスタンス化されていること', () => {
      expect(service).toBeTruthy();
    });

    test('SessionServiceがインスタンス化されていること', () => {
      expect(sessionService).toBeTruthy();
    });
  });

  describe('Logicの関数のテスト', () => {
    const argsFilterContent = { id: 'testArgsID' } as InterfaceRoomMembers;
    const mockReturnValue = {
      __typename: "ModelUserConnection",
      items: [{
        __typename: "User",
        id: 'testID',
        email: 'testEmail',
      }]
    } as ListUsersQuery;
    describe('fetchCompanyMemberの場合わけのテスト', () => {
      test('fetchCompanyMemberのUndefinedのテスト', () => {
        const mockService = jest.spyOn(service, 'fetchCompanyMember').mockReturnValue(of(mockReturnValue));
        logic.fetchCompanyMember('testCompanyID', undefined).subscribe(data => {
          expect(data).toBe(mockReturnValue);
        });
        expect(mockService).toBeCalled();
      });

      test('fetchCompanyMemberの第２引数に指定がある場合', () => {
        const mockService = jest.spyOn(service, 'fetchCompanyMember').mockReturnValue(of(mockReturnValue));
        logic.fetchCompanyMember('testCompanyID', [argsFilterContent]).subscribe(data => {
          expect(data).toBe({});
        });
        expect(mockService).not.toBeCalled();
      })
    })
  });
});
