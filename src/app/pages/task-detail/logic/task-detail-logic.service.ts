import { Injectable } from '@angular/core';
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
}
