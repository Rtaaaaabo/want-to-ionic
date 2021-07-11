import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatMap, map, toArray } from 'rxjs/operators';
import { SessionService } from '../../../shared/service/session.service';
import { ListUsersQuery, CreateUserInput, CreateUserMutation } from '../../../shared/service/amplify.service';
import { MemberListService } from '../service/member-list.service';
import { RequestRegisterCompanyMember, CurrentUser, OptionData } from '../models/member-list.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class MemberListLogic {

  constructor(
    private memberListService: MemberListService,
    private sessionService: SessionService,
  ) { }

  registerCompanyMembers(arrayRegisterEmail: Array<RequestRegisterCompanyMember>, currentUser: CurrentUser): Observable<Array<CreateUserMutation>> {
    const optionData: OptionData = {
      companyId: currentUser.companyID,
      companyName: currentUser.company.name,
      officerName: currentUser.username,
    }
    let targetEmail: string;
    return from(arrayRegisterEmail)
      .pipe(map((registerEmail) => targetEmail = registerEmail.companyMemberEmail))
      .pipe(concatMap(() => this.memberListService.sendRegisterCompanyMembers(targetEmail, optionData)))
      .pipe(concatMap(() => this.createCompanyUserToDynamoDB(targetEmail, optionData)))
      .pipe(toArray());
  }

  fetchCurrentUser(): Observable<any> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((data) => data.attributes));
  }

  fetchAnyUserInfoFromList(email: string): Observable<ListUsersQuery> {
    return this.sessionService.fetchUserInfo(email);
  }

  createCompanyUserToDynamoDB(registerEmail: string, optionData: OptionData): Observable<CreateUserMutation> {
    const content: CreateUserInput = {
      id: `${optionData.companyId}_user_${uuid()}`,
      email: `${registerEmail}`,
      companyID: `${optionData.companyId}`,
      registered: false,
      authority: false,
    }
    return this.memberListService.registerCompanyMembersToDynamoDB(content);
  }

  fetchCompanyMembers(companyId: string): Observable<any> {
    return of();
  }
}
