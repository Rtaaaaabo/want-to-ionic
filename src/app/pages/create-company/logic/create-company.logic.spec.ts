import { TestBed } from '@angular/core/testing';
import { SessionService } from '../../../shared/service/session.service';
import { CreateCompanyService } from '../service/create-company.service';

import { of } from 'rxjs';
import { CreateCompanyLogic } from './create-company.logic';
import { CreateCompanyMutation, CreateCompanyInput, CreateUserMutation, CreateUserInput } from '../../../shared/service/amplify.service';

describe('CreateCompanyService', () => {
  let logic: CreateCompanyLogic;
  let mockedSessionService: SessionService;
  let mockedCreateCompanyService: CreateCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCompanyService, SessionService]
    });
    logic = TestBed.inject(CreateCompanyLogic);
    mockedSessionService = TestBed.inject(SessionService);
    mockedCreateCompanyService = TestBed.inject(CreateCompanyService);
  });

  describe('テスト準備', () => {
    test('should be created', () => {
      expect(logic).toBeTruthy();
    });
  });

  describe('CreateCompanyServiceのメソッドのテスト', () => {
    test('createCompanyToDynamoDBメソッドのテスト', () => {
      const mockReturnValue = {
        __typename: "Company",
        id: 'testId',
        name: 'testName',
        isRegistered: true
      } as CreateCompanyMutation;

      const requestParam = {
        id: 'testId',
        name: 'testName',
        isRegistered: true,
      } as CreateCompanyInput;
      const createCompanySpyOn = jest.spyOn(mockedCreateCompanyService, "createCompany").mockReturnValue(of(mockReturnValue));
      logic.createCompanyToDynamoDB(requestParam).subscribe((data) => {
        expect(data).toBe(mockReturnValue.id);
      });
      expect(createCompanySpyOn).toBeCalled();
    })

    test('CreateUserWithCompanyIdメソッドのテスト', () => {
      const returnCreateUserService = {
        __typename: "User",
        id: 'testIDReturnValue',
        username: 'testNameReturnValue',
        email: 'testEmailReturnValue',
        companyID: 'testCompanyIdValue'
      } as CreateUserMutation;
      const requestContent: CreateUserInput = {
        id: 'requestContentID',
        username: 'requestContentUseName',
        email: 'requestContentEmail',
        companyID: 'requestContentCompanyId',
        registered: false,
        authority: true,
      }
      const createUserSpyOn = jest.spyOn(mockedCreateCompanyService, 'createUser').mockReturnValue(of(returnCreateUserService));
      logic.createUserWithCompanyId(requestContent.id, requestContent.username, requestContent.email).subscribe(data => {
        expect(data).toBe(returnCreateUserService);
      });
      expect(createUserSpyOn).toHaveBeenCalled();
    });

    test('sendEmailForRegisterメソッドのテスト', () => {
      const paramData = {
        id: 'paramId',
        name: 'paramName',
        officer: [{
          officerEmail: 'paramOfficerEmail',
          officerName: 'paramOfficerName',
        }],
        isRegistered: true,
        tel: 'paramTestTel',
        officialEmail: 'paramTestEmail',
        iconCompany: null,
        billing: true,
      };
      const serviceSendEmailForRegisterSpyOn = jest.spyOn(mockedCreateCompanyService, 'sendEmailForRegister').mockReturnValue(of('test'));
      logic.sendEmailForRegister(paramData).subscribe(data => {
        expect(data).toBe('test');
      });
      expect(serviceSendEmailForRegisterSpyOn).toBeCalled();
    })
  })

  describe('SessionServiceのメソッドのテスト', () => {
    test('entrySignUpUserメソッドのテスト', () => {
      const sessionServiceSpy = jest.spyOn(mockedSessionService, 'entryUserSignup').mockReturnValue(of('Success'));
      const requestParam = {
        name: 'test',
        email: 'test@example.com',
        password: 'testtest'
      };
      logic.entrySignUpUser(requestParam, '3233423').subscribe(data => {
        expect(data).toBe('Success');
      });
      expect(sessionServiceSpy).toHaveBeenCalled();
    })
  })

});
