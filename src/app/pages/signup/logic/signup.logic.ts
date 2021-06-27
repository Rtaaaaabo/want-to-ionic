import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { Observable } from 'rxjs';
import { InterfaceSignup } from 'src/app/interfaces/signup.interface';

@Injectable({
  providedIn: 'root'
})
export class SignupLogic {

  constructor(
    private sessionService: SessionService,
  ) { }

  entrySignupUser(value: InterfaceSignup): Observable<string> {
    const signupContent = {
      username: value.email,
      password: value.passwordform,
      attributes: {
        name: value.name,
        email: value.email,
      }
    }
    return this.sessionService.entryUserSignup(signupContent);
  }

}
