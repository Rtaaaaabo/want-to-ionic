import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AmplifyService } from '../../../shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class RoomMemberService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  fetchCompanyMember(content): Observable<any> {
    return from(this.amplifyService.ListUsers(content));
  }
}
