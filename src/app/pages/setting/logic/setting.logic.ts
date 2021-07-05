import { Injectable } from '@angular/core';
import { from, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from 'aws-amplify';
import { SessionService } from '../../../shared/service/session.service';
import { SettingService } from '../service/setting.service';
import { GetUserQuery } from 'src/app/shared/service/amplify.service';
import { IUser } from '../interface/setting.interface';

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

  fetchUserInfo(userId: string): Observable<GetUserQuery> {
    return this.settingService.fetchUserInfo(userId);
  }

  modifiedAvatarIconUrl(avatarInfo: IUser): Observable<IUser> {
    let resultAvatarInfo: IUser = avatarInfo;
    return from(Storage.get(avatarInfo.iconImage.key))
      .pipe(map((url) => resultAvatarInfo.avatarUrl = url))
      .pipe(map(() => resultAvatarInfo));
  }
}
