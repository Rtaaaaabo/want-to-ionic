import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AmplifyService, ListRoomGroupsQuery, ModelRoomGroupFilterInput, ModelUserFilterInput, ListUsersQuery, DeleteRoomMutation } from '../../../shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class RoomMemberService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  fetchCompanyMember(content: ModelUserFilterInput): Observable<ListUsersQuery> {
    return from(this.amplifyService.ListUsers(content));
  }

  fetchRoomMember(filterContent?: ModelRoomGroupFilterInput): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(filterContent));
  }

  createUserRoomGroup(filterContent): Observable<any> {
    return from(this.amplifyService.CreateRoomGroup(filterContent));
  }

  fetchCurrentUser(currentUserId: string): Observable<any> {
    return from(this.amplifyService.GetUser(currentUserId))
  }

  deleteRoomItem(roomId: string): Observable<DeleteRoomMutation> {
    const requestContent = {
      id: roomId
    }
    return from(this.amplifyService.DeleteRoom(requestContent));
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

  fetchUserInfo(email: string): Observable<ListUsersQuery> {
    const filterContent: ModelUserFilterInput = {
      email: {
        eq: `${email}`,
      }
    }
    return from(this.amplifyService.ListUsers(filterContent));
  }

  onCreateRoomMemberListener(): any {
    return this.amplifyService.OnCreateRoomGroupListener;
  }

  onUpdateRoomMemberListener(): any {
    return this.amplifyService.OnUpdateRoomGroupListener;
  }

  onDeleteRoomMemberListener(): any {
    return this.amplifyService.OnDeleteRoomGroupListener;
  }
}
