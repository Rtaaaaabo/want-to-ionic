import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from '../shared/service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.sessionService.isAuthenticated().pipe(tap((loggedIn) => {
      if (!loggedIn) {
        this.router.navigate(['/login'])
      }
    }));
  }
}
