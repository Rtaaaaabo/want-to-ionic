import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";
import { Observable, from, BehaviorSubject, of } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { InterfaceSignup } from "../../interfaces/signup.interface";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  loggedIn: BehaviorSubject<boolean>;

  constructor(private readonly router: Router) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
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
}
