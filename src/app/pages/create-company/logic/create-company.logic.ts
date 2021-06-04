import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateCompanyInput, CreateUserInput, CreateUserMutation } from 'src/app/shared/service/amplify.service';
import { CreateCompanyService } from '../service/create-company.service';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CreateCompanyLogic {

  constructor(
    private createCompanyService: CreateCompanyService,
  ) { }


  createCompanyToDynamoDB(requestContent: CreateCompanyInput): Observable<string> {
    return this.createCompanyService.createCompany(requestContent)
      .pipe(map((result) => result.id));
  }

  createUserWithCompanyId(companyId: string, username: string, officerEmail: string): Observable<CreateUserMutation> {
    const requestContent: CreateUserInput = {
      id: `${uuid()}`,
      username: username,
      email: officerEmail,
      companyID: companyId,
    }
    return this.createCompanyService.createUser(requestContent);
  }

  sendEmailForRegister(content: CreateCompanyInput, otpToken: string): Observable<any> {
    const officerName = content.officer[0].officerName;
    const officerEmail = content.officer[0].officerEmail;
    const requestBody = {
      body: {
        name: officerName,
        email: officerEmail,
        otp: otpToken,
      }
    }
    return this.createCompanyService.sendEmailForRegister(requestBody)
      .pipe(catchError((e) => 'Not Send for Register'))
      .pipe(() => of('Send Success'))
  }

  /**
   * OneTimePasswordを生成するものです
   * @returns {string} oneTimePasswordを返します
   */
  generateOneTimePassword(): Observable<string> {
    return this.createCompanyService.generateOTP().pipe(map(({ otp }) => otp));
  }

  /**
   * Token値が正であるか判断します
   * @param token One time token
   * @returns {boolean} ParamもTokenは正しいか間違いかを返します
   */
  isValidOneTimePassword(token: string): Observable<any> {
    return this.createCompanyService.isValidOTP(token);
  }
}
