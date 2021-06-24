import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService, ListCompanysQuery, ModelCompanyFilterInput, UpdateCompanyInput, UpdateCompanyMutation, CreateUserInput, CreateUserMutation } from 'src/app/shared/service/amplify.service';
import { API } from 'aws-amplify';
import { v4 as uuid } from 'uuid';

const apiVerifyOTP = 'verifyotp';
const pathCheckVerify = '/verify-otp/check';

const apiSendEmail = 'authSendEmail';
const pathRegisterOfficer = '/register/officer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationCompanyService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  fetchCompanyInfo(requestContent: ModelCompanyFilterInput): Observable<ListCompanysQuery> {
    return from(this.amplifyService.ListCompanys(requestContent));
  }

  updateCompanyInfo(requestContent: UpdateCompanyInput): Observable<UpdateCompanyMutation> {
    return from(this.amplifyService.UpdateCompany(requestContent));
  }

  /**
   * Tokenが正であるのか確認し結果を返します
   * @param token One time password token
   * @returns 結果を返します
   */
  isValidOTP(token: string, companyId: string): Observable<{} | { error: string, message: string }> {
    const requestContent = {
      body: {
        token: token,
        companyId: companyId,
      }
    }
    return from(API.post(apiVerifyOTP, pathCheckVerify, requestContent));
  }

  sendEmailOfficerForRegister(companyId: string, officer: { officerName: string, officerEmail: string }): Observable<any> {
    const requestContent = {
      body: {
        companyId: companyId,
        name: officer.officerName,
        email: officer.officerEmail,
      }
    }
    return from(API.post(apiSendEmail, pathRegisterOfficer, requestContent));
  }
  // CreateUserMutation
  createUserToDynamoDb(companyId: string, officer: { officerName: string, officerEmail: string }): Observable<CreateUserMutation> {
    const requestContent: CreateUserInput = {
      id: `${uuid()}`,
      username: `${officer.officerName}`,
      email: `${officer.officerEmail}`,
      companyID: companyId,
      registered: false, // Cognitoに登録しているかいないかで分けるか
    }
    return from(this.amplifyService.CreateUser(requestContent));
  }
}
