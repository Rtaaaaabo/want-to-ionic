import { Injectable } from '@angular/core';
import { AmplifyService, GetRoomQuery, GetUserQuery, ListTasksQuery } from '../../../shared/service/amplify.service';
import { Observable, from } from 'rxjs';

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

  updateTaskItem(content): Observable<any> {
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
}
