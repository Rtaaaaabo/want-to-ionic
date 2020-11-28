import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { RoomMemberService } from '../service/room-member.service';
import { InterfaceRoomMembers } from '../interface/room-members.interface';
import { filter, map, toArray, concatMap } from 'rxjs/operators';
import { GetUserQuery, ListRoomGroupsQuery, ListRoomsQuery } from 'src/app/shared/service/amplify.service';
import { GetRoomGroupQuery } from 'src/app/API.service';
import { ListRoomMembersInfo, ListUserInfo } from '../models/room-members.model';

@Injectable({
  providedIn: 'root'
})
export class RoomMembersLogic {

  constructor(
    private roomMemberService: RoomMemberService,
  ) { }

  makeObjectForRoomCompanyMembers(roomMembers: Array<InterfaceRoomMembers>): any {
    let referenceObject = {
      and: {
        id: {
          ne: ""
        }
      }
    };

    let reference = referenceObject.and['and'] = {
      id: { ne: "" }
    }
    console.log(referenceObject);
  }

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

  fetchRoomMemberGroup(roomId?: string): Observable<Array<ListRoomMembersInfo>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.roomMemberService.fetchRoomMember(filterContent).pipe(map((result) => result.items));
  }

  fetchRoomMembers(roomId: string): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    console.log('[fetchRoomMemberGroup] これも２回実行されてしまう？');
    return of({});
  }

  fetchNonAssignRoomMemberGroup(roomId?: string): Observable<any> {
    return this.roomMemberService.fetchRoomMember().pipe(map(({ items }) => items));
  }

  setRoomMembers(items: Array<ListRoomMembersInfo>): Observable<Array<ListUserInfo>> {
    return from(items)
      .pipe(map(result => result.user))
      .pipe(toArray());
  }

  createUserRoomGroup(userId, roomId): Observable<any> {
    const content = {
      id: `user-room-group-${uuid()}`,
      roomID: `${roomId}`,
      userID: `${userId}`,
    }
    console.log('[createUserRoomGroup] これは追加分、実行');
    // return this.roomMemberService.createUserRoomGroup(content);
    return of({});
  }

  addMembersToAnyRoom(arrayUserId: Array<string>, roomId): Observable<any> {
    return from(arrayUserId)
      .pipe(concatMap((userId) => this.createUserRoomGroup(userId, roomId)))
  }
}
