import { Injectable } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';
import { Observable } from 'rxjs';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class TaskLogicService {

  constructor(
    private taskService: TaskServiceService,
  ) { }
  featchRoomInfo(roomId: string): Observable<GetRoomQuery> {
    return this.taskService.fetchRoomInfo(roomId);
  }
}
