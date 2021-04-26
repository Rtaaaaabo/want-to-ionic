import { Injectable } from '@angular/core';
import { AmplifyService, GetTaskQuery, UpdateTaskMutation, ModelSortDirection, CreateMessageInput } from '../../../shared/service/amplify.service';
import { Observable, from } from 'rxjs';

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

  fetchMessagePerTask(taskId: string): Observable<any> {
    const limitMessage = 100;
    return from(this.amplifyService.TaskByCreatedAt(taskId, ModelSortDirection.DESC, limitMessage))
  }

  updateTaskItem(inputContent): Observable<UpdateTaskMutation> {
    return from(this.amplifyService.UpdateTask(inputContent));
  }

  createMessageItem(inputContent: CreateMessageInput): Observable<any> {
    return from(this.amplifyService.CreateMessage(inputContent));
  }

  onMessageListener() {
    return this.amplifyService.OnCreateMessageListener;
  }

  fetchRoomMember(content): Observable<any> {
    return from(this.amplifyService.ListRoomGroups(content));
  }

  fetchUserName(userId: string): Observable<any> {
    return from(this.amplifyService.GetUser(userId));
  }
}
