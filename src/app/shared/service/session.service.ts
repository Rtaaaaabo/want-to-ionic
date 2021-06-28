import { Injectable } from "@angular/core";
import { Auth } from "aws-amplify";
import { Observable, from, BehaviorSubject, of } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { IArgsEntrySignup } from "../model/task-form.model";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  loggedIn: BehaviorSubject<boolean>;

  constructor() {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  entryUserSignup(valueObj: IArgsEntrySignup, companyId?: string): Observable<string> {
    return from(Auth.signUp(valueObj))
      .pipe(map(() => 'Success'))
      .pipe(catchError(() => 'Denied'));
  }

  isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser()).pipe(
      map(() => {
        this.loggedIn.next(true);
        return true;
      }),
      catchError(() => {
        this.loggedIn.next(false);
        return of(false);
      })
    );
  }

  confirmSignUp(username, code): Observable<void> {
    return from(Auth.confirmSignUp(username, code));
  }

  resendConfirmNumberForSignUp(username): Observable<string> {
    return from(Auth.resendSignUp(username));
  }

  userLogin(email, password): Observable<void> {
    return from(Auth.signIn(email, password))
      .pipe(tap(() => this.loggedIn.next(true)));
  }

  fetchCurrentUser(): Observable<any> {
    return from(Auth.currentAuthenticatedUser());
  }

  signOut() {
    return from(Auth.signOut())
      .pipe(tap(() => this.loggedIn.next(false)));
  }
}
