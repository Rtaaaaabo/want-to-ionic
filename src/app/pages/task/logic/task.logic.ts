import { Injectable } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Observable, of } from 'rxjs';
import { map, filter, flatMap, mergeMap, toArray } from 'rxjs/operators';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';
import { SessionService } from '../../../shared/service/session.service';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskLogic {

  constructor(
    private taskService: TaskService,
    private sessionService: SessionService,
  ) { }

  fetchRoomInfo(roomId: string): Observable<GetRoomQuery> {
    return this.taskService.fetchRoomInfo(roomId);
  }

  fetchCurrentUserInfo(): Observable<string> {
    return this.sessionService.fetchCurrentUser().pipe(map((res) => res.attributes.email));
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
        status: 0,
        priority: 1
      }
      return this.taskService.createTaskItem(content);
    }
  }

  fetchActiveTaskPerRoom(roomId): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.taskService.fetchTaskItemsPerRoom(filterContent)
      .pipe(mergeMap((res) => res.items))
      .pipe(filter(data => data.status < 10))
      .pipe(toArray());
  }

  fetchDoneTaskPerRoom(roomId): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.taskService.fetchTaskItemsPerRoom(filterContent)
      .pipe(mergeMap((res) => res.items))
      .pipe(filter(data => data.status === 10))
      .pipe(toArray());
  }

  updateTaskItem(taskItem, status): Observable<any> {
    const content = {
      id: taskItem.id,
      status: status,
    }
    return this.taskService.updateTaskItem(content);
  }

  deleteTaskItem(taskId: string): Observable<any> {
    const content = {
      id: `${taskId}`,
    }
    return this.taskService.deleteTaskItem(content);
  }
}