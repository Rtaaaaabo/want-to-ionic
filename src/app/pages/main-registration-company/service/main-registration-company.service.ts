import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService, ListCompanysQuery, ModelCompanyFilterInput, UpdateCompanyInput, UpdateCompanyMutation } from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class MainRegistrationCompanyService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  fetchCompanyInfo(requestContent: ModelCompanyFilterInput): Observable<ListCompanysQuery> {
    return from(this.amplifyService.ListCompanys(requestContent));
  }

  updateCompanyInfo(requestContent: UpdateCompanyInput): Observable<UpdateCompanyMutation> {
    return from(this.amplifyService.UpdateCompany(requestContent));
  }
}
