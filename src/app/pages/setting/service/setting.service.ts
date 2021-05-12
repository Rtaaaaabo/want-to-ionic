import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService, GetUserQuery } from '../../../shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(
    private readonly amplifyService: AmplifyService,
  ) { }

  fetchUserInfo(userId: string): Observable<GetUserQuery> {
    return from(this.amplifyService.GetUser(userId));
  }
}
