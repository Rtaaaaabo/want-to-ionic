import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AmplifyService, ListRoomGroupsQuery } from '../../../shared/service/amplify.service';

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

  fetchRoomMember(filterContent?): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(filterContent));
  }

  createUserRoomGroup(filterContent): Observable<any> {
    return from(this.amplifyService.CreateRoomGroup(filterContent));
  }
}
