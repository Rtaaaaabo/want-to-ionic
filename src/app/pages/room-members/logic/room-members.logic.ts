import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { RoomMemberService } from '../service/room-member.service';
import { InterfaceRoomMembers } from '../interface/room-members.interface';
import { filter, map } from 'rxjs/operators';

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
    this.makeObjectForRoomCompanyMembers(queryFilterUser);
    const filterObject = Object.assign(contentObject);
    return this.roomMemberService.fetchCompanyMember(filterObject);
  };

  fetchRoomMemberGroup(roomId: string): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.roomMemberService.fetchRoomMember(filterContent)
      .pipe(map(({ items }) => items))
  }

  fetchNonAssignRoomMemberGroup(roomId?: string): Observable<any> {
    // const filterContent = {
    //   roomID: {
    //     ne: `${roomId}`
    //   }
    // }
    return this.roomMemberService.fetchRoomMember().pipe(map(({ items }) => items));
  }

  createUserRoomGroup(userId, roomId): Observable<any> {
    const content = {
      id: `user-room-group-${uuid()}`,
      roomID: `${roomId}`,
      userID: `${userId}`,
    }
    return this.roomMemberService.createUserRoomGroup(content);
  }
}
