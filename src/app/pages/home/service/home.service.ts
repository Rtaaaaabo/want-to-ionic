import { Injectable } from '@angular/core';
import { AmplifyService, ModelUserFilterInput, ModelRoomGroupFilterInput, ListRoomGroupsQuery, ListUsersQuery, CreateRoomMutation, CreateUserMutation, CreateUserInput, DeleteRoomMutation, CreateRoomGroupMutation, UpdateUserMutation, UpdateUserInput } from '../../../shared/service/amplify.service';
import { from, Observable } from 'rxjs';
import { InterfaceArgsCreateRoom, ISArgsCreateRoomGroup } from '../model/home.interface';

interface IUpdateUserRequest {
  companyID: string,
  email: string,
  iconImage: string,
  id: string,
  positionName: string,
  tel: string,
  username: string,
}
@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private amplifyService: AmplifyService) { }

  checkRegistrationUser(email: string): Observable<ListUsersQuery> {
    const filterContent: ModelUserFilterInput = {
      email: {
        eq: `${email}`,
      }
    }
    return from(this.amplifyService.ListUsers(filterContent));
  }

  createRoom(content: InterfaceArgsCreateRoom): Observable<CreateRoomMutation> {
    return from(this.amplifyService.CreateRoom(content));
  }

  createUser(content: CreateUserInput): Observable<CreateUserMutation> {
    return from(this.amplifyService.CreateUser(content));
  }

  updateUser(content: UpdateUserInput): Observable<UpdateUserMutation> {
    return from(this.amplifyService.UpdateUser(content));
  }

  fetchRoomList(filterContent: ModelRoomGroupFilterInput): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(filterContent));
  }

  deleteRoomItem(roomId: string): Observable<DeleteRoomMutation> {
    const requestContent = {
      id: roomId
    }
    return from(this.amplifyService.DeleteRoom(requestContent));
  }

  createUserRoomGroup(filterContent: ISArgsCreateRoomGroup): Observable<CreateRoomGroupMutation> {
    return from(this.amplifyService.CreateRoomGroup(filterContent));
  }

  fetchRoomMembers(filterContent: ModelRoomGroupFilterInput): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(filterContent));
  }

  fetchRoomGroupsId(filterContent: ModelRoomGroupFilterInput): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(filterContent));
  }

  deleteRoomGroupsItem(roomGroupId: string): Observable<any> {
    const requestContent = {
      id: roomGroupId
    }
    return from(this.amplifyService.DeleteRoomGroup(requestContent));
  }
}
