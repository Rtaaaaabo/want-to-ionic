import { Injectable } from '@angular/core';
import { AmplifyService, GetTaskQuery, UpdateTaskMutation, ModelSortDirection } from '../../../shared/service/amplify.service';
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

  fetchMessagePerTask(filterInfo): Observable<any> {
    return from(this.amplifyService.ListMessages(filterInfo, 100, ModelSortDirection.ASC));
  }

  updateTaskItem(inputContent): Observable<UpdateTaskMutation> {
    return from(this.amplifyService.UpdateTask(inputContent));
  }

  createMessageItem(inputContent): Observable<any> {
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
