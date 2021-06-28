import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmLogic {

  constructor(
    private sessionService: SessionService,
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
}
