import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCompanysQuery, ModelCompanyFilterInput, UpdateCompanyInput } from 'src/app/shared/service/amplify.service';
import { MainRegistrationCompanyService } from '../service/main-registration-company.service';

@Injectable({
  providedIn: 'root'
})
export class MainRegistrationCompanyLogic {

  constructor(
    private registerCompanyService: MainRegistrationCompanyService,
  ) { }

  fetchCompanyInfo(token: string): Observable<ListCompanysQuery> {
    const requestContent: ModelCompanyFilterInput = {
      otp: { eq: token },
    }
    return this.registerCompanyService.fetchCompanyInfo(requestContent);
  }

  updateCompanyInfo(): Observable<UpdateCompanyInput> {
    let requestContent: UpdateCompanyInput;
    return this.registerCompanyService.updateCompanyInfo(requestContent);
  }
}
