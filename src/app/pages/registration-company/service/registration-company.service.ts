import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService, ListCompanysQuery, ModelCompanyFilterInput, UpdateCompanyInput, UpdateCompanyMutation } from 'src/app/shared/service/amplify.service';
import { API } from 'aws-amplify';

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
    console.log('[sendEmailOfficerForRegister service]', companyId, officer);
    const requestContent = {
      body: {
        companyId: companyId,
        name: officer.officerName,
        email: officer.officerEmail,
      }
    }
    return from(API.post(apiSendEmail, pathRegisterOfficer, requestContent));
  }
}
