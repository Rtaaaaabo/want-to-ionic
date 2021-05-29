import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { API } from 'aws-amplify';
import { AmplifyService, CreateCompanyInput, CreateCompanyMutation, CreateUserInput, CreateUserMutation } from 'src/app/shared/service/amplify.service';

const apiName = 'authSendEmail';
const path = '/register/company';

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

  sendEmailForRegister(requestBody: { body: { name: string, email: string } }): Observable<any> {
    const myInit = {
      body: requestBody.body
    }
    return from(API.post(apiName, path, myInit));
  }
}
