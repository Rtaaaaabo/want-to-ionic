import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RoomMembersLogic } from './room-members.logic';
import { RoomMemberService } from '../service/room-member.service';
import { SessionService } from 'src/app/shared/service/session.service';
import {
  ListUsersQuery,
  ListRoomGroupsQuery,
  DeleteRoomMutation,
  DeleteRoomGroupMutation,
} from 'src/app/shared/service/amplify.service';
import { RoomGroupItems } from '../models/room-members.model';
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
    });

    describe('fetchRoomMember serviceのテスト', () => {
      let mockService;
      beforeEach(() => {
        mockService = jest.spyOn(service, 'fetchRoomMember').mockReturnValue(of(mockResultService));
      })
      const mockResultService = {
        __typename: "ModelRoomGroupConnection",
        items: [{
          __typename: "RoomGroup",
          id: 'testId',
          roomID: 'testRoomId',
          userID: 'testUserId',
          createdAt: 'testCreatedAt',
          updatedAt: 'testUpdatedAt'
        }]
      } as ListRoomGroupsQuery;
      test('fetchRoomMemberGroupのテスト', () => {
        logic.fetchRoomMemberGroup('testRoomId').subscribe((data) => {
          expect(data).toBe(mockResultService.items);
        });
      });

      test('fetchRoomMembersのテスト', () => {
        logic.fetchRoomMembers('testRoomId').subscribe((data) => {
          expect(data).toBe(mockResultService);
        });
      });

      test('fetchRoomMembersExceptOwnのテスト', () => {
        logic.fetchRoomMembersExceptOwn('testRoomId', 'testCurrentUserId').subscribe((data) => {
          expect(data).toBe(mockResultService.items);
        });
      });

      afterEach(() => {
        expect(mockService).toBeCalled();
      })
    });

    test('deleteRoomItemのテスト', () => {
      const mockServiceResult = {
        __typename: "Room",
        id: 'testId',
        name: 'testName',
        companyID: 'testCompanyId',
        description: 'testDescription',
        createdAt: 'testCreatedAt',
        updatedAt: 'testUpdatedAt',
      } as DeleteRoomMutation;
      const mockService = jest.spyOn(service, 'deleteRoomItem').mockReturnValue(of(mockServiceResult));
      logic.deleteRoomItem('argsRoomId').subscribe((data) => {
        expect(data).toBe(mockServiceResult);
      });
      expect(mockService).toBeCalled();
    });

    test('fetchRoomGroupsIdのテスト', () => {
      const mockResultService = {
        __typename: "ModelRoomGroupConnection",
        items: [{
          __typename: "RoomGroup",
          id: 'testId',
          roomID: 'testRoomId',
          userID: 'testUserId',
          createdAt: 'testCreatedAt',
          updatedAt: 'testUpdatedAt',
        }]
      } as ListRoomGroupsQuery;
      const mockService = jest.spyOn(service, 'fetchRoomGroupsId').mockReturnValue(of(mockResultService));
      logic.fetchRoomGroupsId('testRoomId', 'testCurrentUserId').subscribe((data) => {
        expect(data).toBe(mockResultService.items[0].id);
      });
      expect(mockService).toBeCalled();
    });

    test('removeOwnFromRoomのテスト', () => {
      const serviceResult = {
        __typename: "RoomGroup",
        id: 'testId',
        roomID: 'testRoomId',
        userID: 'testUserId',
        createdAt: 'testCreatedAt',
        updatedAt: 'testUpdatedAt',
      } as DeleteRoomGroupMutation;
      const mockFetchRoomGroupId = jest.spyOn(logic, 'fetchRoomGroupsId').mockReturnValue(of('testGroupId'));
      const mockService = jest.spyOn(service, 'deleteRoomGroupsItem').mockReturnValue(of(serviceResult));
      logic.removeOwnFromRoom('testRoomId', 'testCurrentUserId').subscribe((data) => {
        expect(data).toBe(serviceResult);
      });
      expect(mockFetchRoomGroupId).toBeCalled();
      expect(mockService).toBeCalled();
    });


    describe('setRoomMembersのテスト', () => {
      const argsRoomGroupItems = [{
        __typename: "RoomGroup",
        id: 'testId',
        roomID: 'testRoomId',
        userID: 'testCurrentUserId',
        createdAt: 'testCreatedAt',
        updatedAt: 'testUpdatedAt',
        user: {
          __typename: "User",
          id: 'testUserId',
          email: 'testUserEmail',
          companyID: 'testCompanyId',
          createdAt: 'testCreatedAt',
          updatedAt: 'testUpdatedAt',
        }
      }] as Array<RoomGroupItems>;
      test('CurrentUserIDとUserIDが一致するときのテスト', () => {
        const argsCurrentUserId = 'testCurrentUserId';
        logic.setRoomMembers(argsRoomGroupItems, argsCurrentUserId).subscribe((data) => {
          expect(data).toHaveLength(0);
        });
      });

      test('CurrentUserIDとUserIDが一致しないときのテスト', () => {
        const argsCurrentUserId = 'dummyCurrentUserID';
        const result = [{
          __typename: "User",
          id: 'testUserId',
          email: 'testUserEmail',
          companyID: 'testCompanyId',
          createdAt: 'testCreatedAt',
          updatedAt: 'testUpdatedAt',
        }]
        logic.setRoomMembers(argsRoomGroupItems, argsCurrentUserId).subscribe((data) => {
          expect(data).toBe(result);
        })
      });
    });

    test('fetchCurrentUserのテスト', () => {
      const mockServiceResult = {
        test: {
          test: 'testTest',
          test2: 'testTest2',
        },
        attributes: {
          name: 'testName',
          email: 'testEmail',
          email_verified: true,
          sub: 'testSub',
        }
      }
      const mockService = jest.spyOn(sessionService, 'fetchCurrentUser').mockReturnValue(of(mockServiceResult));
      logic.fetchCurrentUser().subscribe((data) => {
        expect(data).toBe(mockServiceResult.attributes);
      });
      expect(mockService).toBeCalled();
    });

    test('fetchAnyUserInfoFromListのテスト', () => {
      const mockResultService = {
        __typename: "ModelUserConnection",
        items: [{
          __typename: "User",
          id: 'testId',
          email: 'testEmail',
          companyID: 'testCompanyId',
          createdAt: 'testCreatedAt',
          updatedAt: 'testUpdatedAt',
        }],
      } as ListUsersQuery;
      const mockService = jest.spyOn(service, 'fetchUserInfo').mockReturnValue(of(mockResultService));
      logic.fetchAnyUserInfoFromList('testEmail').subscribe((data) => {
        expect(data).toBe(mockReturnValue.items);
      });
      expect(mockService).toBeCalled();
    });
  });
});
