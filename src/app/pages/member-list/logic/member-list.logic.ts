import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { MemberListService } from '../service/member-list.service';
import { RequestRegisterCompanyMember } from '../models/member-list.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberListLogic {

  constructor(
    private memberListService: MemberListService,
  ) { }

  registerCompanyMembers(arrayRegisterEmail: Array<RequestRegisterCompanyMember>): Observable<any> {
    return from(arrayRegisterEmail)
      .pipe(concatMap((registerEmail) => this.memberListService.sendRegisterCompanyMembers(registerEmail)))
  }
}
