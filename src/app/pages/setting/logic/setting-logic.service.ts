import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SettingService } from '../service/setting-service.service';

@Injectable({
  providedIn: 'root'
})
export class SettingLogic {

  constructor(
    private sessionService: SessionService,
    private settingService: SettingService,
  ) { }

  signOut(): Observable<any> {
    return this.sessionService.signOut()
      .pipe(catchError((error) => { return error }))
  }

  fetchCurrentUser(): Observable<any> {
    return this.sessionService.fetchCurrentUser();
  }

  fetchUserInfo(userId): Observable<any> {
    return this.settingService.fetchUserInfo(userId);
  }
}
