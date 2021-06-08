import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelCompanyFilterInput } from 'src/app/shared/service/amplify.service';
import { MainRegistrationCompanyService } from '../service/main-registration-company.service';

@Injectable({
  providedIn: 'root'
})
export class MainRegistrationCompanyLogic {

  constructor(
    private registerCompanyService: MainRegistrationCompanyService,
  ) { }

  fetchCompanyInfo(token: string): Observable<any> {
    const requestContent: ModelCompanyFilterInput = {
      otp: { eq: token },
    }
    return this.registerCompanyService.fetchCompanyInfo(requestContent);
  }
}
