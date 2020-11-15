import { Injectable } from '@angular/core';
import { from, merge, Observable, of } from 'rxjs';
import { map, filter, mergeMap, toArray, flatMap, switchMap, skipWhile } from 'rxjs/operators';
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
        priority: 0,
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
      .pipe(flatMap((result: InterfaceTask) =>
        this.taskService.updateTaskStatusItem(result)))
      .pipe(toArray());
  }

  reorderStatusTaskItems(reorderDetail: { from: number, to: number }, taskActiveItems: Array<InterfaceTask>): void {
    const isFromGreaterTo = reorderDetail.from < reorderDetail.to;
    const targetReorderItem = taskActiveItems.find(item => item.priority === reorderDetail.from);
    if (isFromGreaterTo) {
      this.toGreaterThanFrom(reorderDetail, targetReorderItem, taskActiveItems).subscribe((data) => {
        console.log('subscribe data', data);
      })
    } else {
      this.fromGreaterThanTo(reorderDetail, targetReorderItem, taskActiveItems)
    }
    // this.taskService.updateTaskStatusForReorder(targetReorderItem, reorderDetail.to)
    //   .pipe(
    //     switchMap(() =>
    //       isFromGreaterTo ? this.reorderToGreaterThenFrom(reorderDetail, taskActiveItems) : this.updateToFrom(taskActiveItems, reorderDetail))
    //   )
    //   .subscribe((data) => {
    //     console.log('taskActiveItems', data);
    //   })
  }

  toGreaterThanFrom(reorderDetail, targetReorderItem, activeItems): Observable<any> {
    console.log('active Items', activeItems);
    console.log('reorderDetail', reorderDetail);
    return from(activeItems)
      .pipe(skipWhile((item: InterfaceTask) => reorderDetail.from < item.priority))
      .pipe(skipWhile((item: InterfaceTask) => reorderDetail.to >= item.priority))
      .pipe(toArray());
  }

  fromGreaterThanTo(reorderDetail, targetReorderItem, activeItems): Observable<any> {
    return of({});
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
