import { TestBed } from '@angular/core/testing';
import { OwnTaskLogic } from './own-task.logic';
import { OwnTaskService } from '../service/own-task.service';
import { SessionService } from 'src/app/shared/service/session.service';
import { of } from 'rxjs';

describe('OwnTaskService', () => {
  let logic: OwnTaskLogic;
  let service: OwnTaskService;
  let sessionService: SessionService;

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

    })
  })

});
