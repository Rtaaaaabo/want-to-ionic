
import { TestBed } from '@angular/core/testing';
import { SignupLogic } from './signup.logic';
import { of } from 'rxjs';
import { SessionService } from 'src/app/shared/service/session.service';

describe('SignUpLogic', () => {
  let logic: SignupLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService]
    });
    logic = TestBed.inject(SignupLogic);
  });

  test('SessionServiceのentryUserSignUpメソッドを呼び出していること', () => {
    const mockArgsParams = {
      name: 'MockedEmail',
      email: 'MockedEmail',
      passwordform: 'MockedPassword',
      confirmPasswordform: 'MockedPassword',
    }
    const sessionService = TestBed.inject(SessionService);
    const spy = jest.spyOn(sessionService, 'entryUserSignup').mockReturnValue(of('Success'));
    logic.entrySignupUser(mockArgsParams).subscribe((data) => {
      expect(data).toBe('Success');
    });
    expect(spy).toHaveBeenCalled();
  })
});
