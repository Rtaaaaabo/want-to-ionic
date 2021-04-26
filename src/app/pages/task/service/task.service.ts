import { Injectable } from "@angular/core";
import {
  AmplifyService,
  CreateMessageInput,
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
import { Observable, from } from "rxjs";
import { TaskPageModule } from '../task.module';

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
    return from(this.amplifyService.UpdateTask(content));
  }

  updateTaskStatusForReorder(
    targetItem: { id: string, priority: number }
  ): Observable<UpdateTaskMutation> {
    const content = {
      id: targetItem.id,
      priority: targetItem.priority,
    };
    return from(this.amplifyService.UpdateTask(content));
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

  createUserRoomGroup(filterContent): Observable<any> {
    return from(this.amplifyService.CreateRoomGroup(filterContent));
  }

  updateMessage(content: CreateMessageInput): Observable<any> {
    return from(this.amplifyService.CreateMessage(content));
  }
}
