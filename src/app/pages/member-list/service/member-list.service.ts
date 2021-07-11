import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { API } from 'aws-amplify';
import { AmplifyService, CreateUserInput, CreateUserMutation, GetCompanyQuery } from 'src/app/shared/service/amplify.service';
import { OptionData } from '../models/member-list.interface';

const apiSendInvite = 'authSendEmail';
const pathRegisterInvite = '/register/member';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  constructor(
    private readonly amplifyService: AmplifyService,
  ) { }

  // 対象ユーザーに招待メールを送信する
  sendRegisterCompanyMembers(registerEmail: string, optionData: OptionData): Observable<any> {
    const requestContent = {
      body: {
        email: `${registerEmail}`,
        companyId: `${optionData.companyId}`,
        companyName: `${optionData.companyName}`,
        officerName: `${optionData.officerName}`,
      }
    }
    return from(API.post(apiSendInvite, pathRegisterInvite, requestContent));
  }

  // 招待を送ったユーザーをリストに表示させておく
  registerCompanyMembersToDynamoDB(content: CreateUserInput): Observable<CreateUserMutation> {
    return from(this.amplifyService.CreateUser(content));
  }

  fetchCompanyMembers(companyId: string): Observable<GetCompanyQuery> {
    return from(this.amplifyService.GetCompany(companyId));
  }
}
