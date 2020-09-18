import { Injectable } from '@angular/core';
import { AmplifyService } from '../../../shared/service/amplify.service';
import { TaskDetailServiceService } from '../service/task-detail-service.service';
import { Observable, from } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailLogicService {

  constructor(
    private taskDetailService: TaskDetailServiceService,
    private amplifyService: AmplifyService,
  ) { }

  fetchAnyTask(taskId: string): Observable<any> {
    return from(this.taskDetailService.getTask(taskId));
  }

  updateTaskItem(taskItem, status): Observable<any> {
    const content = {
      id: taskItem.id,
      status: status,
    }
    return this.taskDetailService.updateTaskItem(content);
  }

  sendNewMessage(taskId, messageContent): Observable<any> {
    const inputContent = {
      content: messageContent,
      taskID: taskId,
      isSent: true,
      id: `${uuid}`,
    }
    return this.taskDetailService.createMessageItem(inputContent);
  }

}
