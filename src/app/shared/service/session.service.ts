import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";
import { Observable, from, BehaviorSubject, of } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  loggedIn: BehaviorSubject<boolean>;

  constructor(private readonly router: Router) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  entryUserSignup(valueObj): Observable<any> {
    return from(Auth.signUp(valueObj));
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
