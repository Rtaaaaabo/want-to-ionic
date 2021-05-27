import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateCompanyInput, CreateUserInput, CreateUserMutation } from 'src/app/shared/service/amplify.service';
import { CreateCompanyService } from '../service/create-company.service';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CreateCompanyLogic {

  constructor(
    private createCompanyService: CreateCompanyService,
  ) { }


  createCompany(requestContent: CreateCompanyInput): Observable<string> {
    return this.createCompanyService.createCompany(requestContent)
      .pipe(map((result) => result.id));
  }

  createUserWithCompanyId(companyId: string, username: string, officerEmail: string): Observable<CreateUserMutation> {
    const requestContent: CreateUserInput = {
      id: `${uuid()}`,
      username: username,
      email: officerEmail,
      companyID: companyId,
    }
    return this.createCompanyService.createUser(requestContent);
  }

  sendEmailForRegister(content: { id: string, name: string, officerEmail: string }): Observable<any> {
    const requestBody = {
      name: content.name,
      email: content.officerEmail,
    }
    return this.createCompanyService.sendEmailForRegister(requestBody).pipe(() => of('Send Success')).pipe(catchError((e) => 'Not Send for Register'));
  }
}
