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

  /**
   * Company一次登録の情報をDynamoDBにいれます
   * @param {CreateCompanyInput} content DynamoDBに保存するPram
   * @returns {string} CompanyID
   */
  createCompanyToDynamoDB(content: CreateCompanyInput): Observable<string> {
    const requestContent = content;
    return this.createCompanyService.createCompany(requestContent)
      .pipe(map((result) => result.id));
  }

  /**
   * 会社に紐づく担当者(User)を作成します。
   * @param { string } companyId CompanyID
   * @param { string} username 会社の担当者氏名
   * @param {string} officerEmail 会社のEmailアドレス
   * @returns DynamoDBに保存した結果
   */
  createUserWithCompanyId(companyId: string, username: string, officerEmail: string): Observable<CreateUserMutation> {
    const requestContent: CreateUserInput = {
      id: `${uuid()}`,
      username: username,
      email: officerEmail,
      companyID: companyId,
    }
    return this.createCompanyService.createUser(requestContent);
  }

  /**
   * 会社の本登録を促すメールを送信します
   * @param {CreateCompanyInput} content 会社登録に必要なParam
   * @returns 成功時とエラー時で返す値
   */
  sendEmailForRegister(content: CreateCompanyInput): Observable<string> {
    const officerName = content.officer[0].officerName;
    const officerEmail = content.officer[0].officerEmail;
    const otpToken = content.otp;
    const requestBody = {
      body: {
        name: officerName,
        email: officerEmail,
        otp: otpToken,
      }
    }
    return this.createCompanyService.sendEmailForRegister(requestBody)
      .pipe(catchError((e) => `Not Send for Register Message: ${e}`))
    // .pipe(() => of('Send Success'))
  }

  /**
   * OneTimePasswordを生成します
   * @returns {string} oneTimePasswordを返します
   */
  generateOneTimePassword(companyId: string): Observable<string> {
    console.log('CompanyId: ', companyId);
    return this.createCompanyService.generateOTP(companyId)
      .pipe(map(({ otp }) => otp));
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
