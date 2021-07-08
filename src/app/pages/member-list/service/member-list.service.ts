import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { RequestRegisterCompanyMember } from '../models/member-list.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  constructor() { }

  sendRegisterCompanyMembers(registerEmail: RequestRegisterCompanyMember): Observable<any> {
    console.log('registerCompanyMembers', registerEmail);
    return of();
  }
}
