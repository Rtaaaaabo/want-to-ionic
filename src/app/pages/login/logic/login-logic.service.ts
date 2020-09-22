import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginLogic {

  constructor(
    private sessionService: SessionService
  ) { }

  sendLoginInfo(email, password): Observable<void> {
    return this.sessionService.userLogin(email, password).pipe(catchError(() => {
      throw 'Login Error';
    }));
  }
}
