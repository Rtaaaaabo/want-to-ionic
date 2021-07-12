import { Injectable } from '@angular/core';
import { from, of, Observable } from 'rxjs';
import { map, filter, concatMap } from 'rxjs/operators';
import { Storage } from 'aws-amplify';
import { CreateRoomGroupMutation, CreateRoomMutation, CreateUserMutation, DeleteRoomMutation, ListUsersQuery, ModelRoomGroupFilterInput, S3Object, User } from 'src/app/shared/service/amplify.service';
import { SessionService } from '../../../shared/service/session.service';
import { SettingService } from '../service/setting.service';
import { GetUserQuery } from 'src/app/shared/service/amplify.service';
import { IconImage } from '../interface/setting.interface';

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
    return this.sessionService.fetchCurrentUser().pipe(map((result) => result.attributes));
  }

  fetchUserInfo(userId: string): Observable<GetUserQuery> {
    return this.settingService.fetchUserInfo(userId);
  }

  /**
   * Current UserのIconのURLを取得
   * @param currentUser CurrentのIconImage
   * @returns 型IconImageからImageのURLを返す
   */
  modifiedAvatarIconUrl(currentUserIcon: IconImage | null): Observable<string | null> {
    return of(currentUserIcon)
      .pipe(concatMap((data) => data !== null ? this.getStorage(data) : of(null)))
  }

  getStorage(dataKey: IconImage): Observable<any> {
    return from(Storage.get(dataKey.key));
  }

  fetchAnyUserInfoFromList(email: string): Observable<ListUsersQuery> {
    return this.settingService.fetchAnyUserInfoFromList(email);
  }
}
