import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { AmplifyService } from '../../../shared/service/amplify.service';
import { v4 as uuid } from 'uuid';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupLogic {

  constructor(
    private sessionService: SessionService,
    private amplifyService: AmplifyService,
  ) { }

  entrySignupUser(value): Observable<any> {
    const signupContent = {
      username: value.email,
      password: value.passwordform,
      attributes: {
        email: value.email,
      }
    }
    return this.sessionService.entryUserSignup(signupContent);
  }

  /*
  value = {
    Session: null
    authenticationFlowType: "USER_SRP_AUTH"
    client: Client {endpoint: "https://cognito-idp.ap-northeast-1.amazonaws.com/", fetchOptions: {…}}
    userDataKey: "CognitoIdentityServiceProvider.47bkbu7qf1aue8v7i0elq754tr.r.taaaaabo+dev03@gmail.com.userData"
    username: "r.taaaaabo+dev03@gmail.com"
  }
  */
  createUser(value, formValue, companyId): Observable<any> {
    const isoNowDate = new Date().toISOString();
    const createUser = {
      id: `${isoNowDate}_${uuid()}`, // いつ作成されたUserであるのか判断できるようにした
      email: formValue.email,
      companyID: companyId,
      username: formValue.username,
      registered: false,
      authority: 'member',
    }
    return from(this.amplifyService.CreateUser(createUser));
  }
}
