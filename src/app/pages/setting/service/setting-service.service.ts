import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService } from '../../../shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  fetchUserInfo(userId): Observable<any> {
    return from(this.amplifyService.GetUser(userId));
  }
}
