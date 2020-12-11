import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    return this.ownTaskService.fetchListTaskGroup(userId)
      .pipe(map((result) => result.chargeTask));
  }

  setTaskPerRoom(arrayTask): Observable<any> {
    return from(arrayTask)
      .pipe(((taskItem) => this.fetchRoomInfo(taskItem)));
  }

  fetchRoomInfo(taskItem): Observable<any> {
    return this.ownTaskService.fetchRoomInfoItem(taskItem);
  }
}
