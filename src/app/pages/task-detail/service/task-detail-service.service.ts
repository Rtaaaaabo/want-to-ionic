import { Injectable } from '@angular/core';
import { AmplifyService, GetTaskQuery } from '../../../shared/service/amplify.service';
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

  updateTaskItem(inputContent): Observable<any> {
    return from(this.amplifyService.UpdateTask(inputContent));
  }

  createMessageItem(inputContent): Observable<any> {
    return from(this.amplifyService.CreateMessage(inputContent));
  }
}
