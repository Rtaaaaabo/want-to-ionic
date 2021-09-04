import { Injectable } from '@angular/core';
import {
  AmplifyService,
  GetTaskQuery,
  UpdateTaskMutation,
  ModelSortDirection,
  CreateMessageInput,
  TaskByCreatedAtQuery,
  CreateMessageMutation,
  GetUserQuery,
  ListRoomGroupsQuery,
  ModelUserFilterInput,
  ListUsersQuery,
  ModelRoomGroupFilterInput,
  UpdateTaskInput,
} from '../../../shared/service/amplify.service';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskDetailService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  getTask(taskId: string): Observable<GetTaskQuery> {
    return from(this.amplifyService.GetTask(taskId))
  }

  fetchMessagePerTask(taskId: string): Observable<TaskByCreatedAtQuery> {
    const limitMessage = 100;
    return from(this.amplifyService.TaskByCreatedAt(taskId, ModelSortDirection.DESC, limitMessage));
  }

  updateTaskItem(inputContent: UpdateTaskInput): Observable<UpdateTaskMutation> {
    return from(this.amplifyService.UpdateTask(inputContent));
  }

  createMessageItem(inputContent: CreateMessageInput): Observable<CreateMessageMutation> {
    return from(this.amplifyService.CreateMessage(inputContent));
  }

  onMessageListener(): any {
    return this.amplifyService.OnCreateMessageListener;
  }

  fetchRoomMember(content: ModelRoomGroupFilterInput): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(content));
  }

  fetchUserName(userId: string): Observable<GetUserQuery> {
    return from(this.amplifyService.GetUser(userId));
  }

  // MessageのAuthorのIconを取得します
  fetchUserIconKey(authorID: string): Observable<string> {
    return from(this.amplifyService.GetUser(authorID))
      .pipe(map((result) => result.iconImage.key))
      .pipe(catchError(() => of('')));
  }

  checkRegistrationUser(email: string): Observable<ListUsersQuery> {
    const filterContent: ModelUserFilterInput = {
      email: {
        eq: `${email}`,
      }
    }
    return from(this.amplifyService.ListUsers(filterContent));
  }
}
