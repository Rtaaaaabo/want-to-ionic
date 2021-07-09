import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { SessionService } from '../../../shared/service/session.service';
import { ListUsersQuery } from '../../../shared/service/amplify.service';
import { MemberListService } from '../service/member-list.service';
import { RequestRegisterCompanyMember } from '../models/member-list.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberListLogic {

  constructor(
    private memberListService: MemberListService,
    private sessionService: SessionService,
  ) { }

  registerCompanyMembers(arrayRegisterEmail: Array<RequestRegisterCompanyMember>): Observable<any> {
    return from(arrayRegisterEmail)
      .pipe(concatMap((registerEmail) => this.memberListService.sendRegisterCompanyMembers(registerEmail)))
  }

  fetchCurrentUser(): Observable<any> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((data) => data.attributes));
  }

  fetchAnyUserInfoFromList(email: string): Observable<ListUsersQuery> {
    return this.sessionService.fetchUserInfo(email);
  }
}
