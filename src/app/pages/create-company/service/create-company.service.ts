import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService, CreateCompanyInput, CreateCompanyMutation, CreateUserInput, CreateUserMutation } from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class CreateCompanyService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  /**
   * Create CompanyするAPIです
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
}
