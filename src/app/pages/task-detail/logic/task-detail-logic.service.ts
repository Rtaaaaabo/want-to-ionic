import { Injectable } from '@angular/core';
import { AmplifyService } from '../../../shared/service/amplify.service';
import { TaskDetailServiceService } from '../service/task-detail-service.service';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailLogicService {

  constructor(
    private taskDetailService: TaskDetailServiceService,
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

}
