import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AmplifyService, UpdateUserInput } from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  updateUserToDynamo(requestContent: UpdateUserInput): Observable<any> {
    return from(this.amplifyService.UpdateUser(requestContent))
  }
}
