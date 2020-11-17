import { Injectable } from '@angular/core';
import { AmplifyService, GetRoomQuery, GetUserQuery, ListTasksQuery } from '../../../shared/service/amplify.service';
import { Observable, from, of } from 'rxjs';
import { InterfaceTask } from 'src/app/interfaces/task.interface';
import { catchError } from 'rxjs/operators';

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
    return from(this.amplifyService.CreateTask(content))
      .pipe(catchError(error => of(error)));
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
      priority: taskItem.priority + 1,
    }
    return from(this.amplifyService.UpdateTask(content));
  }

  updateTaskStatusForReorder(taskItem: InterfaceTask): Observable<any> {
    const content = {
      id: taskItem.id,
      priority: taskItem.priority - 1
    }
    return from(this.amplifyService.UpdateTask(content));
  }

  updateFromTo(taskActiveItems): Observable<any> {
    console.log('Service taskItems', taskActiveItems);
    return of('taskActiveItems', taskActiveItems);
  }

  updateToFrom(taskActiveItems, reorderDetail): Observable<any> {
    console.log('toFrom', taskActiveItems);
    return of(taskActiveItems);
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
