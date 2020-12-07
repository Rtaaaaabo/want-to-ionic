import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  fetchListTaskGroup(userId: string): Observable<any> {
    const filterContent = {
      userID: {
        eq: userId
      }
    }
    return this.ownTaskService.fetchListTaskGroup(filterContent);
  }
}
