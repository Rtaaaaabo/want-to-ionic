import { TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { HomeLogic } from './home.logic';
import { HomeService } from '../service/home.service';
import { SessionService } from '../../../shared/service/session.service';
import { of } from 'rxjs';
import { CreateRoomGroupMutation, CreateRoomMutation, CreateUserMutation, DeleteRoomMutation, ListUsersQuery } from 'src/app/shared/service/amplify.service';
import { ILResponseFetchRoomMembers } from '../model/home.interface';
import { ListRoomGroupsQuery } from 'src/app/API.service';


describe('HomeLogic', () => {
  let logic: HomeLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService, SessionService]
    });
    logic = TestBed.inject(HomeLogic);
  });

  test('HomeLogicがインスタンス化されていること', () => {
    expect(logic).toBeTruthy();
  });

  test('checkRegistrationUserのテスト', () => {
    const dummyResponseListUsersQuery = {
      __typename: "ModelUserConnection",
      items: [{
        __typename: "User",
        id: '11111',
        username: 'testUserName',
        email: 'testEmail',
        companyID: 'testCompanyId',
        tel: '09093234',
        positionName: 'testPositionName',
        iconImage: null,
        registered: null,
        authority: null,
        company: {
          __typename: "Company",
          id: '111111',
          name: 'testCompanyName',
          domain: 'testCompanyDomain',
          createdAt: 'testCompanyCreatedAt',
          updatedAt: 'testCompanyUpdatedAt',
        },
      }],
      nextToken: null
    } as ListUsersQuery;
    const argsParams = {
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
    const mockResponseService = {
      __typename: "Room",
      id: 'testId',
      name: 'testName',
      companyID: 'testCompanyId',
      description: 'testDescription',
      company: {
        __typename: "Company",
        id: 'testCompanyId',
        name: 'testCompanyName',
        domain: 'testCompanyDomain',
        createdAt: 'testCreatedAt',
        updatedAt: 'testUpdatedAt',
      },
      createdAt: 'testCreatedAt',
      updatedAt: 'testUpdatedAt',
    } as CreateRoomMutation;
    const argsParam = {
      nameItem: 'testArgsName',
      descriptionItem: 'testArgsDescription',
    }
    const homeService = TestBed.inject(HomeService);
    const mockHomeServiceCreateUserRoomGroup = jest.spyOn(homeService, 'createRoom').mockReturnValue(of(mockResponseService));
    logic.createRoom(argsParam).subscribe((result) => {
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
    logic.createUserRoomGroup('tesUserId', 'testRoomId').subscribe(result => {
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
    const homeService = TestBed.inject(HomeService);
    const mockFetchRoomMembers = jest.spyOn(homeService, 'fetchRoomMembers').mockReturnValue(of(serviceResult));
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
