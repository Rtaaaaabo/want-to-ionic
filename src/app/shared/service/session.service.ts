import { Injectable } from "@angular/core";
import { Auth } from "aws-amplify";
import { Observable, from, BehaviorSubject, of } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { IArgsEntrySignup } from "../model/task-form.model";
import { AmplifyService, ModelUserFilterInput, ListUsersQuery } from './amplify.service';

@Injectable({
  providedIn: "root",
})
export class SessionService {
  loggedIn: BehaviorSubject<boolean>;

  constructor(
    private amplifyService: AmplifyService,
  ) {
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

  confirmSignUp(username: string, code: string): Observable<void> {
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

  fetchUserInfo(email: string): Observable<ListUsersQuery> {
    const filterContent: ModelUserFilterInput = {
      email: {
        eq: `${email}`
      }
    }
    return from(this.amplifyService.ListUsers(filterContent));
  }

  signOut() {
    return from(Auth.signOut())
      .pipe(tap(() => this.loggedIn.next(false)));
  }
}
