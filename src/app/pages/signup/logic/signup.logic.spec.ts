
import { TestBed } from '@angular/core/testing';
import { SignupLogic } from './signup.logic';
import { SessionService } from 'src/app/shared/service/session.service';

jest.mock('../../../shared/service/session.service.ts');

describe('SignUpLogic', () => {
  let logic: SignupLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService]
    });
    logic = TestBed.inject(SignupLogic);
  });

  describe('テスト準備', () => {
    it('SignUpLogicがインスタンス化されていること', () => {
      expect(logic).toBeTruthy();
    });

    it('依存クラス(SessionService)がMock化されていること', () => {
      const mockedSessionService = TestBed.inject(SessionService) as jest.Mocked<SessionService>;
      expect(mockedSessionService.entryUserSignup.mock).toBeTruthy();
    });
  })

  describe('SignUpLogicメソッドのテスト', () => {
    it('SessionServiceのentryUserSignUpメソッドを呼び出していること', () => {
      const mockArgsParams = {
        username: 'MockedEmail',
        email: 'MockedEmail',
        passwordform: 'MockedPassword',
      }
      const sessionService = TestBed.inject(SessionService);
      const spy = jest.spyOn(sessionService, 'entryUserSignup');
      logic.entrySignupUser(mockArgsParams);
      expect(spy).toBeCalled();
    })
  })
});
