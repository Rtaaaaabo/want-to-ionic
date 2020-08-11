import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmLogicService {

  constructor(
    private sessionService: SessionService,
  ) { }

  sendConfirmUser(username, code): Observable<void> {
    return this.sessionService.confirmSignUp(username, code);
  }

  resendConfirm(username): Observable<string> {
    return this.sessionService.resendConfurmNumbseForSignup(username);
  }
}
