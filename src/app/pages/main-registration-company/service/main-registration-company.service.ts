import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService, ModelCompanyFilterInput } from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class MainRegistrationCompanyService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  fetchCompanyInfo(requestContent: ModelCompanyFilterInput): Observable<any> {
    return from(this.amplifyService.ListCompanys(requestContent));
  }
}
