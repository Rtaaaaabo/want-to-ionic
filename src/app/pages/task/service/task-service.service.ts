import { Injectable } from '@angular/core';
import { AmplifyService, GetRoomQuery } from '../../../shared/service/amplify.service';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(
    private amplifyService: AmplifyService
  ) { }

  fetchRoomInfo(roomId: string): Observable<GetRoomQuery> {
    return from(this.amplifyService.GetRoom(roomId));
  }

  // createTaskItem(roomId: string): Observable<any> {
  //   return from(this.amplifyService.CreateTask());
  // }
}
