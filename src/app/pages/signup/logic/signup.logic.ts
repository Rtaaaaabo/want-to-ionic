import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
        email: value.email,
      }
    }
    return this.sessionService.entryUserSignup(signupContent);
  }

}
