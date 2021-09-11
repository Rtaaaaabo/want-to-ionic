import { TestBed } from '@angular/core/testing';
import { OwnTaskLogic } from './own-task.logic';
import { OwnTaskService } from '../service/own-task.service';
import { SessionService } from 'src/app/shared/service/session.service';
import { of } from 'rxjs';
import { ChargeTaskItems } from 'src/app/shared/model/user.model';
import { GetUserQuery, GetRoomQuery } from 'src/app/shared/service/amplify.service';

describe('OwnTaskService', () => {
  let logic: OwnTaskLogic;
  let service: OwnTaskService;
  let sessionService: SessionService;

  const mockGetUserQuery = {
    __typename: "User",
    id: 'tesId',
    email: 'testEmail',
    companyID: 'testCompanyID',
    chargeTask: {
      __typename: "ModelTaskConnection",
      items: [{
        __typename: "Task",
        id: 'testChargeTaskID',
        authorID: 'testChargeTaskAuthorID',
        roomID: 'testChargeRoomId',
        chargePersonID: 'testChargePersonID',
        title: 'testTitle',
        updatedAt: 'testUpdatedAt',
      }],
    }
  } as GetUserQuery;

  const mockGetRoomQuery = {
    __typename: "Room",
    id: 'testId',
    name: 'testName',
    companyID: 'testCompanyId',
    description: 'testDescription',
    company: {
      __typename: "Company",
      id: 'testCompanyId',
      name: 'testCompanyName',
      officer: [{
        __typename: "Officer",
        officerEmail: 'testOfficerEmail',
        officerName: 'testOfficerName',
      }],
      isRegistered: true,
    },
  } as GetRoomQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(OwnTaskLogic);
    service = TestBed.inject(OwnTaskService);
    sessionService = TestBed.inject(SessionService);
  });

  describe('テスト準備', () => {
    test('Logicがインスタンス化されていること', () => {
      expect(logic).toBeTruthy();
    });

    test('Serviceがインスタンス化されていること', () => {
      expect(service).toBeTruthy();
    });

    test('SessionServiceがインスタンス化されていること', () => {
      expect(sessionService).toBeTruthy();
    });
  })

  describe('Logicの関数のテスト', () => {
    test('fetchCurrentUserのテスト', () => {
      const mockServiceResult = {
        attributes: {
          name: 'testName',
          email: 'testEmail',
          email_verified: true,
          sub: 'testSub',
        },
        test1: {
          test1111: 'testadfasdfsda',
          test11: 'tesafsdfsdgsfgsrsrs',
          test11111: 'asdfasrsefsefsfsd',
        }
      }
      const mockService = jest.spyOn(sessionService, 'fetchCurrentUser').mockReturnValue(of(mockServiceResult));
      logic.fetchCurrentUser().subscribe((result) => {
        expect(result).toBe(mockServiceResult.attributes);
      });
      expect(mockService).toBeCalled();
    });

    test('getTaskChargeItemsのテスト', () => {

      const mockService = jest.spyOn(service, 'getUserInfo').mockReturnValue(of(mockGetUserQuery));
      logic.getTaskChargeItems('userId').subscribe((data) => {
        expect(data).toBe(mockGetUserQuery.chargeTask);
      })
      expect(mockService).toBeCalled();
    })

    describe('setTaskPerRoomのテスト', () => {
      const argsTask = {
        __typename: "Task",
        id: 'testId',
        authorID: 'testAuthorId',
        roomID: 'testRoomId',
        chargePersonID: 'testChargePersonId',
        title: 'testTitle',
      } as ChargeTaskItems;
      test('makeOwnTaskItemsのテスト', () => {
        logic.makeOwnTaskItems(argsTask, mockGetRoomQuery).subscribe((data) => {
          expect(data).toBe({ task: argsTask, room: mockGetRoomQuery });
        });
      })

      test('fetchRoomInfoのテスト', () => {
        const mockService = jest.spyOn(service, 'fetchRoomInfoItem').mockReturnValue(of(mockGetRoomQuery))
        const mockLogicMakeOwnTaskItems = jest.spyOn(logic, "makeOwnTaskItems").mockReturnValue(of({ task: argsTask, room: mockGetRoomQuery }));
        logic.fetchRoomInfo(argsTask).subscribe((data) => {
          expect(data).toBe({ task: argsTask, room: mockGetRoomQuery });
        });
        expect(mockService).toBeCalled();
        expect(mockLogicMakeOwnTaskItems).toBeCalled();
      })

      test('setTaskPerRoomのテスト', () => {
        const arrayArgsTask = [argsTask];
        const mockLogicResult = {
          task: argsTask,
          room: mockGetRoomQuery,
        }
        const mockLogicFetchRoomInfo = jest.spyOn(logic, "fetchRoomInfo").mockReturnValue(of(mockLogicResult));
        logic.setTaskPerRoom(arrayArgsTask).subscribe((data) => {
          expect(data).toBe(arrayArgsTask);
        });
        expect(mockLogicFetchRoomInfo).toBeCalled();
      })
    })

  })

});
