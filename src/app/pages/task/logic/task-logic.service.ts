import { Injectable } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';
import { SessionService } from '../../../shared/service/session.service';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskLogicService {

  constructor(
    private taskService: TaskServiceService,
    private sessionService: SessionService,
  ) { }

  featchRoomInfo(roomId: string): Observable<GetRoomQuery> {
    return this.taskService.fetchRoomInfo(roomId);
  }

  fetchCurrentUserInfo(): Observable<string> {
    return this.sessionService.fetchCurrentUser().pipe(map(res => res.attributes.email));
  }

  createTaskToRoom(dismissData, roomId, email): Observable<any> {
    const iosStringDate = (new Date()).toISOString();
    if (dismissData === undefined) {
      return of({});
    } else {
      const content = {
        id: `${uuid()}`,
        authorID: `${email}`,
        roomID: `${roomId}`,
        title: dismissData.nameItem,
        description: dismissData.descriptionItem,
        scheduleDate: dismissData.scheduleDateItem,
        createdAt: iosStringDate,
        // status: 0,
        // priority: 1
      }
      return this.taskService.createTaskItem(content);
    }
  }

  fetchTaskPerRoom(roomId): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.taskService.fetchTaskItemsPerRoom(filterContent);
  }
}
