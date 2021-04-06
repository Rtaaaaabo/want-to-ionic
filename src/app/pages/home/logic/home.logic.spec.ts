import { TestBed } from '@angular/core/testing';

import { HomeLogic } from './home.logic';
import { HomeService } from '../service/home.service';
import { SessionService } from '../../../shared/service/session.service';
import { of } from 'rxjs';
import { CreateRoomMutation, ListUsersQuery } from 'src/app/shared/service/amplify.service';


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

  test('createUserのテスト', () => {

  });

  test('updateUserのテスト', () => {

  });

  test('deleteRoomItemのテスト', () => {

  });

  test('createUserRoomGroupのテスト', () => {

  });

  test('fetchRoomMembersのテスト', () => {

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
