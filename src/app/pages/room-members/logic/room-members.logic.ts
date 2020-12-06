import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { RoomMemberService } from '../service/room-member.service';
import { InterfaceRoomMembers } from '../interface/room-members.interface';
import { filter, map, toArray } from 'rxjs/operators';
import { ListRoomMembersInfo, ListUserInfo } from '../models/room-members.model';
import { SessionService } from 'src/app/shared/service/session.service';

@Injectable({
  providedIn: 'root'
})
export class RoomMembersLogic {

  constructor(
    private roomMemberService: RoomMemberService,
    private sessionService: SessionService,
  ) { }

  fetchCompanyMember(companyId: number | string, queryFilterUser?: Array<InterfaceRoomMembers>): Observable<any> {
    const contentObject = {
      companyID: {
        eq: `${companyId}`
      },
    }
    if (queryFilterUser === undefined) {
      return this.roomMemberService.fetchCompanyMember(contentObject);
    } else {
      return of({});
    }
  };

  fetchRoomMemberGroup(roomId: string): Observable<Array<ListRoomMembersInfo>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.roomMemberService.fetchRoomMember(filterContent)
      .pipe(map((result) => result.items));
  }

  fetchRoomMembers(roomId: string, queryFilterUserName?: string): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      },
    }
    return this.roomMemberService.fetchRoomMember(filterContent)
  }

  fetchNonAssignRoomMemberGroup(roomId?: string): Observable<any> {
    return this.roomMemberService.fetchRoomMember()
      .pipe(map(({ items }) => items));
  }

  setRoomMembers(items: Array<ListRoomMembersInfo>, currentUserId: string): Observable<Array<ListUserInfo>> {
    return from(items)
      .pipe(filter((item) => item.userID !== currentUserId))
      .pipe(map((result) => result.user))
      .pipe(toArray());
  }

  fetchCurrentUserId(): Observable<string> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes.sub))
  }

  fetchCurrentUser(currentUserId: string): Observable<any> {
    return this.roomMemberService.fetchCurrentUser(currentUserId)
  }
}
