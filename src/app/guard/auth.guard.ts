import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from '../shared/service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly sessionService: SessionService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.sessionService.isAuthenticated().pipe(tap((loggedIn) => {
      if (!loggedIn) {
        console.log('logout');
        this.router.navigate(['/login'])
      } else {
        console.log('Login');
      }
    }));
  }
}
