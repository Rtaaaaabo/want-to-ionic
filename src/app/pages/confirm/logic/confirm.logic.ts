import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { SessionService } from '../../../shared/service/session.service';
import { CreateUserInput } from '../../../shared/service/amplify.service';
import { ConfirmService } from '../service/confirm.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmLogic {

  constructor(
    private sessionService: SessionService,
    private confirmService: ConfirmService,
  ) { }

  /**
   * Cognitoに問い合わせする関数です
   * @param {string} username Email
   * @param {string} code 確認コード
   * @returns Cognitoに問い合わせた結果が返ってきます
   */
  sendConfirmUser(username: string, code: string): Observable<void> {
    return this.sessionService.confirmSignUp(username, code);
  }

  /**
   * 確認コードを再送信する関数です
   * @param {string} username Email
   * @returns 確認コードを問い合わせた結果が返ってきます
   */
  resendConfirm(username: string): Observable<string> {
    return this.sessionService.resendConfirmNumberForSignUp(username);
  }

  /**
   * DynamoDBにユーザーを登録します
   * @param companyId CompanyID
   * @param userId UserID
   * @returns DynamoDBに登録した結果を返します
   */
  createUserToDynamo(companyId: string, userId: string): Observable<any> {
    // const requestContent: CreateUserInput = {
    //   // id: `${companyId}_user_${uuid()}`,
    //   // username: 'userName',
    //   // email: 
    // }
    // return this.confirmService.createUserToDynamo(companyId);
    return of({});
  }
}
