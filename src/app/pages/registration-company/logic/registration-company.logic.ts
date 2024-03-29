import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { Company, ListCompanysQuery, ModelCompanyFilterInput, UpdateCompanyInput, CreateUserInput } from 'src/app/shared/service/amplify.service';
import { CompanyRegister } from '../interface/company-register.interface';
import { SessionService } from '../../../shared/service/session.service';
import { RegistrationCompanyService } from '../service/registration-company.service';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RegistrationCompanyLogic {

  constructor(
    private registerCompanyService: RegistrationCompanyService,
    private sessionService: SessionService,
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

  updateCompanyInfo(companyInfo: Company, companyFormValue: CompanyRegister): Observable<UpdateCompanyInput> {
    let requestContent: UpdateCompanyInput;
    requestContent = {
      id: companyInfo.id,
      name: companyFormValue.companyName,
      officer: companyFormValue.companyOfficer,
      isRegistered: true,
      tel: companyFormValue.companyTel,
      officialEmail: companyFormValue.companyEmail,
      iconCompany: null,
    }
    return this.registerCompanyService.updateCompanyInfo(requestContent);
  }

  /**
 * Token値が正であるか判断します
 * @param token One time token
 * @returns {boolean} ParamもTokenは正しいか間違いかを返します
 */
  isValidOneTimePassword(token: string, companyId: string): Observable<any> {
    return this.registerCompanyService.isValidOTP(token, companyId);
  }

  registrationUserOfficer(companyInfo: Company): Observable<any> {
    return of({});
  }

  sendToOfficerForRegister(companyInfo: Company, officerArray: Array<{ officerName: string, officerEmail: string }>): Observable<any> {
    return from(officerArray)
      .pipe(concatMap((officer) => this.registerCompanyService.sendEmailOfficerForRegister(companyInfo.id, officer)));
  }

  createCompanyMembersToDynamoDb(companyInfo: Company, officerArray: Array<{ officerName: string, officerEmail: string }>): Observable<any> {
    return from(officerArray)
      .pipe(concatMap((officer) => this.registerCompanyService.createUserToDynamoDb(companyInfo.id, officer)))
  }

}
