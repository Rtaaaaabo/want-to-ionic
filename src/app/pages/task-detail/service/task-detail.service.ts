import { Injectable } from '@angular/core';
import { AmplifyService, GetTaskQuery, UpdateTaskMutation, ModelSortDirection, CreateMessageInput, SubscriptionResponse, OnCreateMessageSubscription, TaskByCreatedAtQuery, CreateMessageMutation, GetUserQuery, ListRoomGroupsQuery, ModelUserFilterInput } from '../../../shared/service/amplify.service';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
    console.log('fetchUserIconKey authorID', authorID);
    return from(this.amplifyService.GetUser(authorID))
      .pipe(map((result) => result.iconImage.key))
      .pipe(catchError(() => of('')));
  }

  checkRegistrationUser(email: string): Observable<any> {
    const filterContent: ModelUserFilterInput = {
      email: {
        eq: `${email}`,
      }
    }
    return from(this.amplifyService.ListUsers(filterContent));
  }
}
