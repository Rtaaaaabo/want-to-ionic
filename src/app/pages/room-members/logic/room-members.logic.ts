import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { RoomMemberService } from '../service/room-member.service';
import { InterfaceRoomMembers } from '../interface/room-members.interface';
import { map, toArray } from 'rxjs/operators';
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
    return this.roomMemberService.fetchRoomMember(filterContent)
  }

  fetchNonAssignRoomMemberGroup(roomId?: string): Observable<any> {
    return this.roomMemberService.fetchRoomMember().pipe(map(({ items }) => items));
  }

  setRoomMembers(items: Array<ListRoomMembersInfo>): Observable<Array<ListUserInfo>> {
    return from(items)
      .pipe(map(result => result.user))
      .pipe(toArray());
  }
}
