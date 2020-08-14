import { Injectable } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskLogicService {

  constructor(
    private taskService: TaskServiceService,
  ) { }

  featchRoomInfo(roomId: string): Observable<any> {
    return this.taskService.featchRoomInfo(roomId);
  }
}
