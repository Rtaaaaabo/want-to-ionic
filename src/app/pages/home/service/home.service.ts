import { Injectable } from '@angular/core';
import { AmplifyService, ModelRoomFilterInput, ListRoomsQuery, ModelUserFilterInput, ModelRoomGroupFilterInput } from '../../../shared/service/amplify.service';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private amplifyService: AmplifyService) { }

  checkRegistrationUser(email: string): Observable<any> {
    const filterContent: ModelUserFilterInput = {
      email: {
        eq: `${email}`
      }
    }
    return from(this.amplifyService.ListUsers(filterContent));
  }

  createRoom(content): Observable<any> {
    return from(this.amplifyService.CreateRoom(content));
  }

  createUser(content): Observable<any> {
    return from(this.amplifyService.CreateUser(content))
  }

  fetchRoomList(companyId: string): Observable<ListRoomsQuery> {
    const filterContent: ModelRoomFilterInput = {
      companyID: {
        eq: `${companyId}`
      },
    }
    return from(this.amplifyService.ListRooms(filterContent));
  }

  deleteRoomItem(roomId: string): Observable<any> {
    const requestContent = {
      id: roomId
    }
    return from(this.amplifyService.DeleteRoom(requestContent));
  }

  createUserRoomGroup(filterContent): Observable<any> {
    return from(this.amplifyService.CreateRoomGroup(filterContent));
  }

  fetchRoomMembers(filterContent: ModelRoomGroupFilterInput): Observable<any> {
    return from(this.amplifyService.ListRoomGroups(filterContent));
  }

  fetchRoomGroupsId(filterContent: ModelRoomGroupFilterInput): Observable<any> {
    return from(this.amplifyService.ListRoomGroups(filterContent));
  }

  deleteRoomGroupsItem(roomGroupId: string): Observable<any> {
    const requestContent = {
      id: roomGroupId
    }
    return from(this.amplifyService.DeleteRoomGroup(requestContent));
  }
}
