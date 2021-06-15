import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { API } from 'aws-amplify';
import { AmplifyService, CreateCompanyInput, CreateCompanyMutation, CreateUserInput, CreateUserMutation } from 'src/app/shared/service/amplify.service';
import { request } from 'http';

const apiAuthSendEmail = 'authSendEmail';
const apiVerifyOTP = 'verifyotp';

const pathRegisterCompany = '/register/company';
const pathVerifyGenerate = '/verify-otp/generate';
const pathCheckVerify = '/verify-otp';

@Injectable({
  providedIn: 'root'
})
export class CreateCompanyService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  /**
   * DynamoDBに会社名、担当者、担当者Emailを登録します
   * @param requestContent リクエストコンテンツ
   * @returns CreateCompanyした結果がCreateCompanyMutation形式で返る
   */
  createCompany(requestContent: CreateCompanyInput): Observable<CreateCompanyMutation> {
    return from(this.amplifyService.CreateCompany(requestContent));
  }

  /**
   * Create UserするAPIです
   * @param requestContent リクエストコンテンツ
   * @returns CreateUserした結果がCreateUserMutation形式で返る
   */
  createUser(requestContent: CreateUserInput): Observable<CreateUserMutation> {
    return from(this.amplifyService.CreateUser(requestContent));
  }

  sendEmailForRegister(requestBody: { body: { name: string, email: string, otp: string } }): Observable<any> {
    const myInit = {
      body: requestBody.body
    }
    return from(API.post(apiAuthSendEmail, pathRegisterCompany, myInit));
  }

  /**
   * OneTimePasswordを生成して返す関数です
   * @returns {string} oneTimePasswordを返します
   */
  generateOTP(companyId: string): Observable<{ success: string, otp: string }> {
    const requestBody = {
      body: { company_id: companyId },
    };
    console.log('requestBody', requestBody);
    return from(API.get(apiVerifyOTP, pathVerifyGenerate, requestBody));
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
