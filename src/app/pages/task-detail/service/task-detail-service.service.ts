import { Injectable } from '@angular/core';
import { AmplifyService, GetTaskQuery, OnCreateMessageSubscription } from '../../../shared/service/amplify.service';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailServiceService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  getTask(taskId: string): Observable<GetTaskQuery> {
    return from(this.amplifyService.GetTask(taskId))
  }

  fetchMessagePerTask(filterInfo): Observable<any> {
    return from(this.amplifyService.ListMessages(filterInfo));
  }

  updateTaskItem(inputContent): Observable<any> {
    return from(this.amplifyService.UpdateTask(inputContent));
  }

  createMessageItem(inputContent): Observable<any> {
    return from(this.amplifyService.CreateMessage(inputContent));
  }

  onMessageListener() {
    return this.amplifyService.OnCreateMessageListener;
  }
}