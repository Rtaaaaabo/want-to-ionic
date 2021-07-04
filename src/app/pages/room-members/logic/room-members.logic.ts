import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map, toArray, concatMap } from 'rxjs/operators';
import { SessionService } from 'src/app/shared/service/session.service';
import { ListUsersQuery } from 'src/app/shared/service/amplify.service';
import { RoomMemberService } from '../service/room-member.service';
import { InterfaceRoomMembers } from '../interface/room-members.interface';
import { ListRoomMembersInfo, ListUserInfo, Attribute, RoomGroupItems, RoomGroupUser } from '../models/room-members.model';

@Injectable({
  providedIn: 'root'
})
export class RoomMembersLogic {

  constructor(
    private readonly roomMemberService: RoomMemberService,
    private readonly sessionService: SessionService,
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

  fetchRoomMemberGroup(roomId: string): Observable<Array<RoomGroupItems>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.roomMemberService.fetchRoomMember(filterContent)
      .pipe(map((result) => result.items));
  }

  fetchRoomMembers(roomId: string, currentUserId?: string): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      },
    }
    return this.roomMemberService.fetchRoomMember(filterContent)
  }

  fetchRoomMembersExceptOwn(roomId: string, currentUserId: string): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      },
      userID: {
        ne: `${currentUserId}`
      }
    }
    return this.roomMemberService.fetchRoomMember(filterContent)
      .pipe(map((result) => result.items));
  }

  deleteRoomItem(roomId: string): Observable<any> {
    return this.roomMemberService.deleteRoomItem(roomId);
  }

  removeOwnFromRoom(roomId: string, currentUserId: string): Observable<any> {
    return this.fetchRoomGroupsId(roomId, currentUserId)
      .pipe(concatMap((roomGroupId) => this.roomMemberService.deleteRoomGroupsItem(roomGroupId)));
  }

  fetchRoomGroupsId(roomId, currentUserId): Observable<string> {
    const filterContent = {
      roomID: {
        eq: roomId,
      },
      userID: {
        eq: currentUserId,
      }
    }
    return this.roomMemberService.fetchRoomGroupsId(filterContent)
      .pipe(map(({ items: groups }) => groups[0].id))
  }

  fetchNonAssignRoomMemberGroup(roomId?: string): Observable<any> {
    return this.roomMemberService.fetchRoomMember()
      .pipe(map(({ items }) => items));
  }

  /**
   * 自分以外のメンバーを取得します
   * @param items RoomGroupMember 
   * @param currentUserId 
   * @returns 
   */
  setRoomMembers(items: Array<RoomGroupItems>, currentUserId: string): Observable<Array<RoomGroupUser>> {
    return from(items)
      .pipe(filter((item) => item.userID !== currentUserId))
      .pipe(map((result) => result.user))
      .pipe(toArray());
  }

  fetchCurrentUser(): Observable<Attribute> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map(data => data.attributes));
  }

  fetchAnyUserInfoFromList(email: string): Observable<ListUsersQuery> {
    return this.roomMemberService.fetchUserInfo(email);
  }

  // fetchCurrentUser(currentUserId: string): Observable<any> {
  //   return this.roomMemberService.fetchCurrentUser(currentUserId)
  // }

}
