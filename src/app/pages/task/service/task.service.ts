import { Injectable } from '@angular/core';
import { AmplifyService, GetRoomQuery, GetUserQuery, ListTasksQuery } from '../../../shared/service/amplify.service';
import { Observable, from, of } from 'rxjs';
import { InterfaceTask } from 'src/app/interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private amplifyService: AmplifyService
  ) { }

  fetchRoomInfo(roomId: string): Observable<GetRoomQuery> {
    return from(this.amplifyService.GetRoom(roomId));
  }

  createTaskItem(content): Observable<any> {
    return from(this.amplifyService.CreateTask(content));
  }

  createRoomGroup(content): Observable<any> {
    return from(this.amplifyService.CreateRoomGroup(content));
  }

  updateTaskItem(content): Observable<any> {
    return from(this.amplifyService.UpdateTask(content));
  }

  updateTaskStatusItem(taskItem: InterfaceTask): Observable<any> {
    const content = {
      id: taskItem.id,
      status: taskItem.status + 1,
    }
    return from(this.amplifyService.UpdateTask(content));
  }

  fetchTaskItemsPerRoom(content): Observable<ListTasksQuery> {
    return from(this.amplifyService.ListTasks(content));
  }

  deleteTaskItem(content): Observable<any> {
    return from(this.amplifyService.DeleteTask(content));
  }

  fetchUserInfo(userId: string): Observable<GetUserQuery> {
    return from(this.amplifyService.GetUser(userId));
  }

  fetchCompanyMember(content): Observable<any> {
    return from(this.amplifyService.ListUsers(content));
  }

  fetchRoomMember(content): Observable<any> {
    return from(this.amplifyService.ListRoomGroups(content));
  }
}
