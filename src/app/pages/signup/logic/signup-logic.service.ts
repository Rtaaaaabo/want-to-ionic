import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';

@Injectable({
  providedIn: 'root'
})
export class SignupLogicService {

  constructor(private sessionService: SessionService) { }

  entrySignupUser(value) {
    const signupContent = {
      username: value.email,
      password: value.password,
      attributes: {
        userName: value.username,
        companyId: 'takucloudcom'
      }
    }
    return this.sessionService.entryUserSignup(signupContent).subscribe((data) => {
      console.log('SignUp data', data);
      return data;
    });
  }
}
