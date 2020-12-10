import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AmplifyService } from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class OwnTaskService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  fetchListTaskGroup(userId: string): Observable<any> {
    return from(this.amplifyService.GetUser(userId));
  }
}
