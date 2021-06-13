import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, ListCompanysQuery, ModelCompanyFilterInput, UpdateCompanyInput } from 'src/app/shared/service/amplify.service';
import { CompanyRegister } from '../interface/company-register.interface';
import { MainRegistrationCompanyService } from '../service/main-registration-company.service';

@Injectable({
  providedIn: 'root'
})
export class MainRegistrationCompanyLogic {

  constructor(
    private registerCompanyService: MainRegistrationCompanyService,
  ) { }

  /**
   * Tokenから会社情報を取得します
   * @param token OneTimePassword token
   * @returns TokenとマッチするCompanyの情報
   */
  fetchCompanyInfo(token: string): Observable<ListCompanysQuery> {
    const requestContent: ModelCompanyFilterInput = {
      otp: { eq: token },
    }
    return this.registerCompanyService.fetchCompanyInfo(requestContent);
  }

  updateCompanyInfo(companyInfo: Company, companyForm: CompanyRegister): Observable<UpdateCompanyInput> {
    let requestContent: UpdateCompanyInput;
    return this.registerCompanyService.updateCompanyInfo(requestContent);
  }
}
