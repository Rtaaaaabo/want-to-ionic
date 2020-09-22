import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingLogic {

  constructor(
    private sessionService: SessionService,
  ) { }

  signOut(): Observable<any> {
    return this.sessionService.signOut()
      .pipe(catchError((error) => { return error }))
  }
}
