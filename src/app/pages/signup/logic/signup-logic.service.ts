import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupLogicService {

  constructor(private sessionService: SessionService) { }

  entrySignupUser(value): Observable<any> {
    const signupContent = {
      username: value.email,
      password: value.password,
      attributes: {
        userName: value.username,
        companyId: 'takucloudcom'
      }
    }
    return this.sessionService.entryUserSignup(signupContent);
  }
}
