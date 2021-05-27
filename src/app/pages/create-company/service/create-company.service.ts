import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService, CreateCompanyInput, CreateCompanyMutation, CreateUserInput, CreateUserMutation } from 'src/app/shared/service/amplify.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const host: string = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CreateCompanyService {

  constructor(
    private amplifyService: AmplifyService,
    private httpClient: HttpClient,
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

  sendEmailForRegister(requestBody: { name: string, email: string }): Observable<any> {
    const path = '/register/company';
    return this.httpClient.post(`${host}/${path}`, requestBody)
  }
}
