import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import {
  map,
  filter,
  toArray,
  concatMap,
  findIndex,
  catchError,
} from "rxjs/operators";
import {
  CreateRoomGroupMutation,
  CreateTaskMutation,
  DeleteTaskMutation,
  GetRoomQuery,
  GetUserQuery,
  ListRoomGroupsQuery,
  ListUsersQuery,
  UpdateTaskMutation,
} from "src/app/shared/service/amplify.service";
import { SessionService } from "../../../shared/service/session.service";
import { v4 as uuid } from "uuid";
import { TaskService } from "../service/task.service";
import { CurrentUserInfo } from "../interface/current-user-info.interface";
import { InterfaceTask } from "src/app/interfaces/task.interface";

@Injectable({
  providedIn: "root",
})
export class TaskLogic {
  constructor(
    private taskService: TaskService,
    private sessionService: SessionService
  ) { }

  fetchRoomInfo(roomId: string): Observable<GetRoomQuery> {
    return this.taskService.fetchRoomInfo(roomId);
  }

  fetchCurrentUserInfo(): Observable<CurrentUserInfo> {
    return this.sessionService
      .fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  createTaskToRoom(
    taskFormData,
    roomId,
    userId
  ): Observable<CreateTaskMutation> {
    const isoStringDate = new Date().toISOString();
    if (taskFormData === undefined) {
      return of();
    } else {
      const content = {
        id: `${uuid()}`,
        authorID: `${userId}`,
        roomID: `${roomId}`,
        chargePersonID: `${taskFormData.chargePersonId}`,
        title: `${taskFormData.nameItem}`,
        description: `${taskFormData.descriptionItem}`,
        scheduleDate: `${taskFormData.scheduleDateItem}`,
        createdAt: `${isoStringDate}`,
        status: 0,
        priority: 0,
      };
      return this.taskService.createTaskItem(content);
    }
  }

  createRoomGroup(userId, roomId): Observable<CreateRoomGroupMutation> {
    const content = {
      id: `room-group${uuid()}`,
      roomID: `${roomId}`,
      userID: `${userId}`,
    };
    return this.taskService.createRoomGroup(content);
  }

  fetchActiveTaskPerRoom(roomId): Observable<Array<InterfaceTask>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`,
      },
    };
    return this.taskService
      .fetchTaskItemsPerRoom(filterContent)
      .pipe(concatMap((res) => res.items))
      .pipe(filter((data) => data.status < 10))
      .pipe(toArray());
  }

  fetchDoneTaskPerRoom(roomId): Observable<Array<InterfaceTask>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`,
      },
    };
    return this.taskService
      .fetchTaskItemsPerRoom(filterContent)
      .pipe(concatMap((res) => res.items))
      .pipe(filter((data) => data.status === 10))
      .pipe(toArray());
  }

  updateDoneTaskItem(taskFormItem, status): Observable<UpdateTaskMutation> {
    const content = {
      id: taskFormItem.id,
      status: status,
    };
    return this.taskService.updateTaskItem(content);
  }

  updateStatusTaskItems(taskItems): Observable<Array<UpdateTaskMutation>> {
    return from(taskItems)
      .pipe(
        concatMap((result: InterfaceTask) =>
          this.taskService.updateTaskStatusItem(result)
        )
      )
      .pipe(toArray());
  }

  getIndexNewArray(taskActiveItems: Array<InterfaceTask>, taskActiveItem): Observable<number> {
    return from(taskActiveItems)
      .pipe(findIndex(taskItem => taskItem.id === taskActiveItem.id))
  }

  updateTaskItemPriority(indexArray: number, taskActiveItems: Array<InterfaceTask>): Observable<any> {
    const targetTaskItem = taskActiveItems[indexArray];
    const content = {
      id: targetTaskItem.id,
      priority: indexArray
    };
    return this.taskService.updateTaskStatusForReorder(content);
  }

  deleteTaskItem(taskId: string): Observable<DeleteTaskMutation> {
    const content = {
      id: `${taskId}`,
    };
    return this.taskService.deleteTaskItem(content);
  }

  fetchUserInfoFromAmplify(userId: string): Observable<GetUserQuery> {
    return this.taskService.fetchUserInfo(userId);
  }

  fetchCompanyMember(
    companyId: string,
    queryFilterUser?: string
  ): Observable<ListUsersQuery | any> {
    const filterContent = queryFilterUser !== undefined ?
      {
        companyID: {
          eq: `${companyId}`,
        },
        username: {
          contains: queryFilterUser,
        },
      } :
      {
        companyID: {
          eq: `${companyId}`,
        },
      }
    return this.taskService.fetchCompanyMember(filterContent);
  }

  fetchMemberListOnRoom(
    roomId: string | number
  ): Observable<ListRoomGroupsQuery> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`,
      },
    };
    return this.taskService.fetchRoomMember(filterContent);
  }

  compareTaskArray(a: InterfaceTask, b: InterfaceTask): number {
    const priorityA = a.priority;
    const priorityB = b.priority;
    return priorityA - priorityB;
  }

  createUserRoomGroup(userId: string, roomId: string): Observable<any> {
    const content = {
      id: `user-room-group-${uuid()}`,
      roomID: `${roomId}`,
      userID: `${userId}`,
    }
    return this.taskService.createUserRoomGroup(content);
  }

  addMembersToAnyRoom(arrayUserId: Array<string>, roomId: string): Observable<any> {
    return from(arrayUserId).pipe(concatMap((userId) => this.createUserRoomGroup(userId, roomId)))
  }

}
