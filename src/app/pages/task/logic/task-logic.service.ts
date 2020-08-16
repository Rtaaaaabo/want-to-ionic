import { Injectable } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';
import { Observable } from 'rxjs';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';
import { v4 as uuid } from 'uuid';

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

  createTaskToRoom(dismissData): Observable<any> {
    const content = {
      id: `${uuid()}`,
      authorID: 'ここからは別Serviceから取得',
      roomID: 'ここも渡す',
      title: dismissData.nameItem,
      description: dismissData.description,
      scheduleDate: dismissData.scheduleDateItem,
      status: 0,
      priority: 1
    }
    return this.taskService.createTaskItem(content);
  }
}
