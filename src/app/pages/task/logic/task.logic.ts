import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import {
  map,
  filter,
  toArray,
  concatMap,
  findIndex,
} from "rxjs/operators";
import { Storage } from 'aws-amplify';
import {
  CreateMessageInput,
  CreateRoomGroupMutation,
  CreateTaskMutation,
  GetRoomQuery,
  GetUserQuery,
  ListRoomGroupsQuery,
  ListUsersQuery,
  UpdateTaskMutation,
  GetCompanyQuery,
} from "src/app/shared/service/amplify.service";
import { SessionService } from "../../../shared/service/session.service";
import { v4 as uuid } from "uuid";
import { TaskService } from "../service/task.service";
import { CurrentUserInfo } from "../interface/current-user-info.interface";
import { InterfaceTask } from "src/app/interfaces/task.interface";
import { CurrentUser } from '../model/task-member.model';


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

  fetchCurrentUserCognitoInfo(): Observable<CurrentUserInfo> {
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

  fetchEachStatusTask(items: Array<InterfaceTask>, targetStatus: number): Observable<Array<InterfaceTask>> {
    console.log('fetchEachStatus targetStatus', targetStatus, items);
    return from(items)
      .pipe(filter((data) => data.status === targetStatus))
      .pipe(toArray());
  }

  fetchActiveTaskPerRoom(roomId: string): Observable<Array<InterfaceTask>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`,
      },
    };
    return this.taskService
      .fetchTaskItemsPerRoom(filterContent)
      .pipe(map((res) => res.items))
  }

  fetchDoneTaskPerRoom(roomId: string): Observable<Array<InterfaceTask>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`,
      },
    };
    return this.taskService
      .fetchTaskItemsPerRoom(filterContent)
      .pipe(map((res) => res.items));
  }

  updateDoneTaskItem(taskFormItem, status: number): Observable<UpdateTaskMutation> {
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
    return from(arrayUserId)
      .pipe(concatMap((userId) => this.createUserRoomGroup(userId, roomId)));
  }

  reorderTaskMessage(data: UpdateTaskMutation): Observable<any> {
    const createContent: CreateMessageInput = {
      id: `${uuid()}`,
      taskID: `${data.id}`,
      authorID: `${data.authorID}`,
      content: `優先度 ${data.priority + 1} 番目に移動しました`,
    }
    return this.taskService.updateMessage(createContent);
  }

  fetchCompanyMembers(companyId: string): Observable<GetCompanyQuery> {
    return this.taskService.fetchAnyCompany(companyId);
  }

  fetchAnyUserInfoFromList(email: string): Observable<Array<CurrentUser>> {
    return this.taskService.fetchAnyUserInfoFromList(email)
      .pipe(map((result) => result.items))
  }
}
