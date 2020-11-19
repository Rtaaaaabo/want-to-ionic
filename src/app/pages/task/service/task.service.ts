import { Injectable } from "@angular/core";
import {
  AmplifyService,
  CreateRoomGroupMutation,
  CreateTaskMutation,
  DeleteTaskMutation,
  GetRoomQuery,
  GetUserQuery,
  ListRoomGroupsQuery,
  ListTasksQuery,
  ListUsersQuery,
  UpdateTaskMutation,
} from "../../../shared/service/amplify.service";
import { Observable, from, of } from "rxjs";
import { InterfaceTask } from "src/app/interfaces/task.interface";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private amplifyService: AmplifyService) { }

  fetchRoomInfo(roomId: string): Observable<GetRoomQuery> {
    return from(this.amplifyService.GetRoom(roomId));
  }

  createTaskItem(content): Observable<CreateTaskMutation> {
    return from(this.amplifyService.CreateTask(content));
  }

  createRoomGroup(content): Observable<CreateRoomGroupMutation> {
    return from(this.amplifyService.CreateRoomGroup(content));
  }

  updateTaskItem(content): Observable<UpdateTaskMutation> {
    return from(this.amplifyService.UpdateTask(content));
  }

  updateTaskStatusItem(taskItem): Observable<UpdateTaskMutation> {
    const content = {
      id: taskItem.id,
      priority: taskItem.priority + 1,
    };
    console.log('Item文起動', content);
    return from(this.amplifyService.UpdateTask(content));
  }

  updateTaskStatusForReorder(
    taskItem: InterfaceTask
  ): Observable<UpdateTaskMutation> {
    const content = {
      id: taskItem.id,
      priority: taskItem.priority - 1,
    };
    return from(this.amplifyService.UpdateTask(content));
  }

  updateFromTo(taskActiveItems): Observable<any> {
    return of("taskActiveItems", taskActiveItems);
  }

  updateToFrom(taskActiveItems, reorderDetail): Observable<any> {
    return of(taskActiveItems);
  }

  fetchTaskItemsPerRoom(content): Observable<ListTasksQuery> {
    return from(this.amplifyService.ListTasks(content));
  }

  deleteTaskItem(content): Observable<DeleteTaskMutation> {
    return from(this.amplifyService.DeleteTask(content));
  }

  fetchUserInfo(userId: string): Observable<GetUserQuery> {
    return from(this.amplifyService.GetUser(userId));
  }

  fetchCompanyMember(content): Observable<ListUsersQuery> {
    return from(this.amplifyService.ListUsers(content));
  }

  fetchRoomMember(content): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(content));
  }
}
