import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { API } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { RequestRegisterCompanyMember, OptionData } from '../models/member-list.interface';

const apiSendInvite = 'authSendEmail';
const pathRegisterInvite = '/register/member';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  constructor() { }

  // 対象ユーザーに招待メールを送信する
  sendRegisterCompanyMembers(registerEmail: RequestRegisterCompanyMember, optionData: OptionData): Observable<any> {
    console.log('registerCompanyMembers', registerEmail.companyMemberEmail);
    const requestContent = {
      body: {
        email: `${registerEmail.companyMemberEmail}`,
        companyId: `${optionData.companyId}`,
        companyName: `${optionData.companyName}`,
        officerName: `${optionData.officerName}`,
      }
    }
    return from(API.post(apiSendInvite, pathRegisterInvite, requestContent));
  }

  // 招待を送ったユーザーをリストに表示させておく
  registerCompanyMembersToDynamoDB(): Observable<any> {
    return of();
  }
}
