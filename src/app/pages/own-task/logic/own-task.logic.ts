import { Injectable } from '@angular/core';
import { from, Observable, concat, of } from 'rxjs';
import { concatMap, map, toArray, filter, groupBy } from 'rxjs/operators';
import { SessionService } from 'src/app/shared/service/session.service';
import { OwnTaskService } from '../service/own-task.service';

@Injectable({
  providedIn: 'root'
})
export class OwnTaskLogic {

  constructor(
    private ownTaskService: OwnTaskService,
    private sessionService: SessionService,
  ) { }

  fetchCurrentUser(): Observable<any> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  getTaskChargeItems(userId: string): Observable<any> {
    return this.ownTaskService.getUserInfo(userId)
      .pipe(map((result) => result.chargeTask));
  }

  setTaskPerRoom(arrayTask): Observable<any> {
    return from(arrayTask)
      .pipe(concatMap((taskItem) => this.fetchRoomInfo(taskItem)))
      .pipe(toArray());
  }

  fetchRoomInfo(taskItem): Observable<any> {
    return this.ownTaskService.fetchRoomInfoItem(taskItem)
      .pipe(filter((result) => result !== null))
      .pipe(concatMap((roomInfo) => this.makeOwnTaskItems(taskItem, roomInfo)))
  }

  makeOwnTaskItems(taskItem, roomInfo): Observable<any> {
    return of({
      task: taskItem,
      room: roomInfo,
    });
  }

  filterExceptDoneTask(itemsArray): Observable<any> {
    return from(itemsArray.filter(item => item.task.status < 10))
      .pipe(toArray());
  }

  updateDoneTaskItem(taskFormItem, status: number): Observable<any> {
    const content = {
      id: taskFormItem.id,
      status: status,
    };
    return this.ownTaskService.updateTaskItem(content);
  }

}
