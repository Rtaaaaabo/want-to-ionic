import { TestBed } from '@angular/core/testing';
import { HomeLogic } from './home.logic';
import { HomeService } from '../service/home.service';
import { SessionService } from '../../../shared/service/session.service';
import { of } from 'rxjs';
import { CreateRoomGroupMutation, CreateRoomMutation, CreateUserMutation, DeleteRoomMutation, ListUsersQuery } from 'src/app/shared/service/amplify.service';
import { ILResponseFetchRoomMembers, CurrentUser, RoomGroupItems } from '../model/home.interface';
import { ListRoomGroupsQuery } from 'src/app/API.service';

describe('HomeLogic', () => {
  let logic: HomeLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService, SessionService]
    });
    logic = TestBed.inject(HomeLogic);
  });

  describe('テスト準備', () => {
    test('HomeLogicがインスタンス化されていること', () => {
      expect(HomeLogic).toBeTruthy();
    });
  });

  test('checkRegistrationUserのテスト', () => {
    const dummyResponseListUsersQuery = {} as ListUsersQuery;
    const argsParams = {
      name: 'test',
      email: 'test@test.com',
      email_verified: true,
      sub: 'testSub',
    }
    const homeService = TestBed.inject(HomeService);
    const mockHomeServiceCheckRegistration = jest.spyOn(homeService, 'checkRegistrationUser').mockReturnValue(of(dummyResponseListUsersQuery));
    logic.checkRegistrationUser(argsParams).subscribe((result) => {
      expect(result).toBe(dummyResponseListUsersQuery);
    })
    expect(mockHomeServiceCheckRegistration).toHaveBeenCalled();
  });

  test('fetchCurrentUserメソッドを仕様して、Attributeを取得する', () => {
    const expectedResponse = {
      email: 'testEmail',
      email_verified: true,
      sub: 'testSub',
    };
    const mockResponse = {
      attributes: {
        email: 'testEmail',
        email_verified: true,
        sub: 'testSub',
      },
    };
    const sessionService = TestBed.inject(SessionService);
    const mockSessionServiceFetchCurrentUser = jest.spyOn(sessionService, 'fetchCurrentUser').mockReturnValue(of(mockResponse));
    logic.fetchCurrentUser().subscribe((result) => {
      expect(result).toBe(expectedResponse);
    });
    expect(mockSessionServiceFetchCurrentUser).toHaveBeenCalled();
  });

  test('createRoomのテスト', () => {
    const mockResponseService = {} as CreateRoomMutation;
    const argsParam = {
      nameItem: 'testArgsName',
      descriptionItem: 'testArgsDescription',
    }
    const currentUser = {} as CurrentUser;
    const homeService = TestBed.inject(HomeService);
    const mockHomeServiceCreateUserRoomGroup = jest.spyOn(homeService, 'createRoom').mockReturnValue(of(mockResponseService));
    logic.createRoom(argsParam, currentUser).subscribe((result) => {
      expect(result).toBe(mockResponseService);
    });
    expect(mockHomeServiceCreateUserRoomGroup).toBeCalled();
  });


  test('deleteRoomItemのテスト', () => {
    const expectedResult = {
      __typename: "Room",
      id: 'testId',
      name: 'testName',
      companyID: 'testCompanyId',
      description: 'testDescription',
    } as DeleteRoomMutation;
    const argsRoomId = 'testRoomId'
    const homeService = TestBed.inject(HomeService);
    const mockDeleteRoomItem = jest.spyOn(homeService, "deleteRoomItem").mockReturnValue(of(expectedResult));
    logic.deleteRoomItem(argsRoomId).subscribe(result => {
      expect(result).toBe(expectedResult);
    });
    expect(mockDeleteRoomItem).toBeCalled();
  });

  test('createUserRoomGroupのテスト', () => {
    const expectedResult = {
      __typename: "RoomGroup",
      id: 'testId',
      roomID: 'testRoomId',
      userID: 'testUserId;'
    } as CreateRoomGroupMutation
    const homeService = TestBed.inject(HomeService);
    const mockCreateUserRoomGroup = jest.spyOn(homeService, "createUserRoomGroup").mockReturnValue(of(expectedResult));
    logic.createUserRoomGroup('tesUserId', 'testRoomId')
      .subscribe(result => {
        expect(result).toBe(expectedResult);
      });
    expect(mockCreateUserRoomGroup).toBeCalled();
  });

  test('fetchRoomMembersのテスト', () => {
    const expectedResult = [{
      __typename: "RoomGroup",
      id: 'testId',
      roomID: 'testRoomId',
      userID: 'testUserId',
    }] as Array<ILResponseFetchRoomMembers>;
    const serviceResult = {
      __typename: "ModelRoomGroupConnection",
      items: [{
        __typename: "RoomGroup",
        id: 'testId',
        roomID: 'testRoomId',
        userID: 'testUserId',
      }]
    } as ListRoomGroupsQuery;
    const resultLogic = [{
      __typename: "RoomGroup",
      id: 'testId',
      roomID: 'testRoomId',
      userID: 'testUserId',
    }] as RoomGroupItems[];
    const homeService = TestBed.inject(HomeService);
    const mockServiceFetchRoomMembers = jest.spyOn(homeService, 'fetchRoomMembers').mockReturnValue(of(serviceResult));
    logic.fetchRoomMembers('testRoomId', 'testUserId').subscribe((data) => {
      expect(data).toBe(resultLogic);
    });
    expect(mockServiceFetchRoomMembers).toBeCalled();
  });

  test('removeMeFromRoomのテスト', () => {

  });

  test('fetchRoomGroupsIdのテスト', () => {

  });

  test('fetchRoomListのテスト', () => {

  });

  test('fetchAvatarIconUrlのテスト', () => {

  });

  test('getDirStringのテスト', () => {

  });

  test('setExitsRoomAndUserのテスト', () => {

  });

  test('getContentTypeのテスト', () => {

  });

  test('makeExtのテスト', () => {

  });

  test('base64toBlobのテスト', () => {

  });

  test('putStorageのテスト', () => {

  });

  test('getStorageのテスト', () => {

  });
});
