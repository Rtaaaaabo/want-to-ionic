import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { SessionService } from '../../../shared/service/session.service';
import { ListUsersQuery } from '../../../shared/service/amplify.service';
import { MemberListService } from '../service/member-list.service';
import { RequestRegisterCompanyMember, CurrentUser, OptionData } from '../models/member-list.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberListLogic {

  constructor(
    private memberListService: MemberListService,
    private sessionService: SessionService,
  ) { }

  registerCompanyMembers(arrayRegisterEmail: Array<RequestRegisterCompanyMember>, currentUser: CurrentUser): Observable<any> {
    const optionData: OptionData = {
      companyId: currentUser.companyID,
      companyName: currentUser.company.name,
      officerName: currentUser.username,
    }
    return from(arrayRegisterEmail)
      .pipe(concatMap((registerEmail) => this.memberListService.sendRegisterCompanyMembers(registerEmail, optionData)))
  }

  fetchCurrentUser(): Observable<any> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((data) => data.attributes));
  }

  fetchAnyUserInfoFromList(email: string): Observable<ListUsersQuery> {
    return this.sessionService.fetchUserInfo(email);
  }
}
