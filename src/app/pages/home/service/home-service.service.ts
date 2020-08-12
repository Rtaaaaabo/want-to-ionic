import { Injectable } from '@angular/core';
import { AmplifyService, ModelRoomFilterInput, ListRoomsQuery } from '../../../shared/service/amplify.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private amplifyService: AmplifyService) { }

  createRoom(content): Observable<any> {
    return from(this.amplifyService.CreateRoom(content));
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
}
