import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AmplifyService, CreateUserInput } from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  createUserToCognito(requestContent: CreateUserInput): Observable<any> {
    return from(this.amplifyService.CreateUser(requestContent))
  }
}
