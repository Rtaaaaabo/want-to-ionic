import { Injectable } from '@angular/core';
import { AmplifyService, GetTaskQuery, UpdateTaskMutation, ModelSortDirection, CreateMessageInput, SubscriptionResponse, OnCreateMessageSubscription, TaskByCreatedAtQuery, CreateMessageMutation, GetUserQuery, ListRoomGroupsQuery } from '../../../shared/service/amplify.service';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  updateTaskItem(inputContent): Observable<UpdateTaskMutation> {
    return from(this.amplifyService.UpdateTask(inputContent));
  }

  createMessageItem(inputContent: CreateMessageInput): Observable<CreateMessageMutation> {
    return from(this.amplifyService.CreateMessage(inputContent));
  }

  onMessageListener(): any {
    return this.amplifyService.OnCreateMessageListener;
  }

  fetchRoomMember(content): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(content));
  }

  fetchUserName(userId: string): Observable<GetUserQuery> {
    return from(this.amplifyService.GetUser(userId));
  }

  // MessageのAuthorのIconを取得します
  fetchUserIconKey(authorID: string): Observable<string> {
    return from(this.amplifyService.GetUser(authorID))
      .pipe(map((result) => result.iconImage.key))
  }
}
