import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatMap, map, toArray, filter } from 'rxjs/operators';
import { Storage } from 'aws-amplify';
import { SessionService } from '../../../shared/service/session.service';
import { CreateUserInput, CreateUserMutation, GetUserQuery, ModelUserFilterInput } from '../../../shared/service/amplify.service';
import { MemberListService } from '../service/member-list.service';
import { RequestRegisterCompanyMember, CurrentUser, OptionData, CompanyMember, IconImage } from '../models/member-list.interface';
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

  fetchAnyUserInfoFromList(email: string): Observable<Array<CurrentUser>> {
    return this.sessionService.fetchUserInfo(email)
      .pipe(map((result) => result.items))
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

  fetchCompanyMembers(companyId: string): Observable<Array<CompanyMember>> {
    return this.memberListService.fetchCompanyMembers(companyId)
      .pipe(map((result) => result.companyMembers.items));
  }

  fetchMember(userId: string): Observable<GetUserQuery> {
    return this.memberListService.fetchMember(userId)
  }

  /**
 * Current UserのIconのURLを取得
 * @param currentUser CurrentのIconImage
 * @returns 型IconImageからImageのURLを返す
 */
  modifiedAvatarIconUrl(currentUserIcon: IconImage | null): Observable<string | null> {
    return of(currentUserIcon)
      .pipe(concatMap((data) => data ? this.getStorage(data) : of(null)))
  }

  setCompanyMembers(members: Array<CompanyMember>, currentUserId: string): Observable<Array<CompanyMember>> {
    return from(members)
      .pipe(filter((item) => item.id !== currentUserId))
      .pipe(toArray());
  }

  getStorage(dataKey?: IconImage): Observable<string | object> {
    return from(Storage.get(dataKey.key));
  }

  fetchFilteredCompanyMembers(companyId: string, searchValue: string): Observable<Array<CompanyMember>> {
    const filterContent: ModelUserFilterInput = {
      companyID: { eq: companyId },
    }
    if (searchValue !== "") {
      filterContent.username = { contains: searchValue };
    }
    return this.memberListService.fetchFilteredCompanyMembers(filterContent)
      .pipe(map((result) => result.items));
  }
}
