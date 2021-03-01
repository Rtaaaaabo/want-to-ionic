import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { AmplifyService, UpdateTaskMutation } from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class OwnTaskService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  getUserInfo(userId: string): Observable<any> {
    return from(this.amplifyService.GetUser(userId));
  }

  fetchRoomInfoItem(taskItem): Observable<any> {
    const roomId: string = taskItem.roomID;
    return from(this.amplifyService.GetRoom(roomId));
  }

  updateTaskItem(content): Observable<UpdateTaskMutation> {
    return from(this.amplifyService.UpdateTask(content));
  }
}
