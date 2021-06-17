import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService, ListCompanysQuery, ModelCompanyFilterInput, UpdateCompanyInput, UpdateCompanyMutation } from 'src/app/shared/service/amplify.service';
import { API } from 'aws-amplify';

const apiVerifyOTP = 'verifyotp';
const pathCheckVerify = '/verify-otp/check';

@Injectable({
  providedIn: 'root'
})
export class MainRegistrationCompanyService {

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
  isValidOTP(token: string): Observable<{} | { error: string, message: string }> {
    const requestBody = {
      body: token,
    }
    return from(API.get(apiVerifyOTP, pathCheckVerify, requestBody));
  }
}
