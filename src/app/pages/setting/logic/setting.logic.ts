import { Injectable } from '@angular/core';
import { SessionService } from '../../../shared/service/session.service';
import { Observable } from 'rxjs';
import { SettingService } from '../service/setting.service';

@Injectable({
  providedIn: 'root'
})
export class SettingLogic {

  constructor(
    private readonly sessionService: SessionService,
    private readonly settingService: SettingService,
  ) { }

  signOut(): Observable<any> {
    return this.sessionService.signOut();
  }

  fetchCurrentUser(): Observable<any> {
    return this.sessionService.fetchCurrentUser();
  }

  fetchUserInfo(userId): Observable<any> {
    return this.settingService.fetchUserInfo(userId);
  }
}
