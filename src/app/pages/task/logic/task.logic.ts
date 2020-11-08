import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, filter, mergeMap, toArray, flatMap } from 'rxjs/operators';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';
import { SessionService } from '../../../shared/service/session.service';
import { v4 as uuid } from 'uuid';
import { TaskService } from '../service/task.service';
import { CurrentUserInfo } from '../interface/current-user-info.interface';
import { InterfaceTask } from 'src/app/interfaces/task.interface';


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

  fetchCurrentUserInfo(): Observable<CurrentUserInfo> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  createTaskToRoom(dismissData, roomId, email, userId): Observable<any> {
    const iosStringDate = (new Date()).toISOString();
    if (dismissData === undefined) {
      return of({});
    } else {
      const content = {
        id: `${uuid()}`,
        authorID: `${userId}`,
        roomID: `${roomId}`,
        chargePersonID: dismissData.chargePersonId,
        title: dismissData.nameItem,
        description: dismissData.descriptionItem,
        scheduleDate: dismissData.scheduleDateItem,
        createdAt: iosStringDate,
        status: 0,
        priority: 0,  // AddTaskのときは一番最初に持ってくるため
      }
      return this.taskService.createTaskItem(content);
    }
  }

  createRoomGroup(userId, roomId): Observable<any> {
    const content = {
      id: `room-group${uuid()}`,
      roomID: `${roomId}`,
      userID: `${userId}`
    }
    return this.taskService.createRoomGroup(content);
  }

  fetchActiveTaskPerRoom(roomId): Observable<Array<any>> {
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

  updateDoneTaskItem(taskFormItem, status): Observable<any> {
    const content = {
      id: taskFormItem.id,
      status: status,
    }
    return this.taskService.updateTaskItem(content);
  }

  updateStatusTaskItems(taskItems): Observable<any> {
    return from(taskItems)
      .pipe(flatMap((result: InterfaceTask) => this.taskService.updateTaskStatusItem(result)))
      .pipe(toArray());
  }

  deleteTaskItem(taskId: string): Observable<any> {
    const content = {
      id: `${taskId}`,
    }
    return this.taskService.deleteTaskItem(content);
  }

  fetchUserInfoFromAmplify(userId: string): Observable<any> {
    return this.taskService.fetchUserInfo(userId);
  }

  fetchCompanyMember(companyId: string, queryFilterUser?: string): Observable<any> {
    const filterContent = {
      companyID: {
        eq: `${companyId}`
      },
      username: {
        contains: queryFilterUser
      }
    }
    return this.taskService.fetchCompanyMember(filterContent);
  }

  fetchMemberListOnRoom(roomId: string | number): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.taskService.fetchRoomMember(filterContent);
  }

  compareTaskArray(a: InterfaceTask, b: InterfaceTask): number {
    const priorityA = a.priority;
    const priorityB = b.priority;
    return priorityA - priorityB;
  }

}
