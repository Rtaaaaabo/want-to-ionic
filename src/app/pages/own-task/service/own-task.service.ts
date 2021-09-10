import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {
  AmplifyService,
  UpdateTaskMutation,
  GetUserQuery,
  GetRoomQuery,
} from 'src/app/shared/service/amplify.service';
import { ChargeTaskItems } from 'src/app/shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class OwnTaskService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  getUserInfo(userId: string): Observable<GetUserQuery> {
    return from(this.amplifyService.GetUser(userId));
  }

  fetchRoomInfoItem(taskItem: ChargeTaskItems): Observable<GetRoomQuery> {
    const roomId: string = taskItem.roomID;
    return from(this.amplifyService.GetRoom(roomId));
  }

  updateTaskItem(content): Observable<UpdateTaskMutation> {
    return from(this.amplifyService.UpdateTask(content));
  }
}
