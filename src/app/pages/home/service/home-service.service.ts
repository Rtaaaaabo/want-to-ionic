import { Injectable } from '@angular/core';
import { AmplifyService, ModelRoomFilterInput, ListRoomsQuery, ModelUserFilterInput } from '../../../shared/service/amplify.service';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

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
      }
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
}
