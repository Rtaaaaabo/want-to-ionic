import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomMemberService } from '../service/room-member.service';


@Injectable({
  providedIn: 'root'
})
export class RoomMembersLogic {

  constructor(
    private roomMemberService: RoomMemberService,
  ) { }

  fetchCompanyMember(companyId: number | string, queryFilterUser?: string): Observable<any> {
    const filterContent = {
      companyID: {
        eq: `${companyId}`
      },
      username: {
        contains: queryFilterUser
      }
    }
    return this.roomMemberService.fetchCompanyMember(filterContent);
  };

  fetchRoomMemberGroup(roomId: string): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.roomMemberService.fetchRoomMember(filterContent);
  }
}
