import { Injectable } from '@angular/core';
import { from, Observable, concat, of } from 'rxjs';
import { concatMap, map, toArray, filter } from 'rxjs/operators';
import { GetRoomQuery, UpdateTaskMutation } from 'src/app/shared/service/amplify.service';
import { SessionService } from 'src/app/shared/service/session.service';
import { OwnTaskService } from '../service/own-task.service';
import { CurrentUser } from '../model/own-task.interface';
import { Attribute, ChargeTask, ChargeTaskItems } from 'src/app/shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class OwnTaskLogic {

  constructor(
    private readonly ownTaskService: OwnTaskService,
    private readonly sessionService: SessionService,
  ) { }

  fetchCurrentUser(): Observable<Attribute> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  getTaskChargeItems(userId: string): Observable<ChargeTask> {
    return this.ownTaskService.getUserInfo(userId)
      .pipe(map((result) => result.chargeTask));
  }

  setTaskPerRoom(arrayTask: Array<ChargeTaskItems>): Observable<Array<{ task: ChargeTaskItems, room: GetRoomQuery }>> {
    return from(arrayTask)
      .pipe(concatMap((taskItem) => this.fetchRoomInfo(taskItem)))
      .pipe(toArray());
  }

  fetchRoomInfo(taskItem: ChargeTaskItems): Observable<{ task: ChargeTaskItems, room: GetRoomQuery }> {
    return this.ownTaskService.fetchRoomInfoItem(taskItem)
      .pipe(filter((result) => result !== null))
      .pipe(concatMap((roomInfo) => this.makeOwnTaskItems(taskItem, roomInfo)))
  }

  makeOwnTaskItems(taskItem: ChargeTaskItems, roomInfo: GetRoomQuery): Observable<{ task: ChargeTaskItems, room: GetRoomQuery }> {
    return of({
      task: taskItem,
      room: roomInfo,
    });
  }

  filterExceptDoneTask(itemsArray: Array<{ task: ChargeTaskItems, room: GetRoomQuery }>): Observable<Array<{ task: ChargeTaskItems, room: GetRoomQuery }>> {
    return from(itemsArray.filter(item => item.task.status < 10))
      .pipe(toArray());
  }

  updateDoneTaskItem(taskFormItem: { task: ChargeTaskItems, room: GetRoomQuery }, status: number): Observable<UpdateTaskMutation> {
    const content = {
      id: taskFormItem.task.id,
      status: status,
    };
    return this.ownTaskService.updateTaskItem(content);
  }

  fetchAnyUserInfoFromList(email: string): Observable<Array<CurrentUser>> {
    return this.sessionService.fetchUserInfo(email).pipe(map((result) => result.items));
  }

}
