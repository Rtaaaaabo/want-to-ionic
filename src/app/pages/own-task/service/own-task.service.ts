import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { AmplifyService } from 'src/app/shared/service/amplify.service';
import { TaskLogic } from '../../task/logic/task.logic';

@Injectable({
  providedIn: 'root'
})
export class OwnTaskService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  fetchListTaskGroup(userId: string): Observable<any> {
    return from(this.amplifyService.GetUser(userId));
  }

  fetchRoomInfoItem(taskItem): Observable<any> {
    const roomId: string = taskItem.roomID;
    return from(this.amplifyService.GetRoom(roomId));
  }
}
