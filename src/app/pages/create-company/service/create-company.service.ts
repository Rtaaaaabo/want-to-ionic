import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AmplifyService, CreateCompanyInput, CreateCompanyMutation } from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class CreateCompanyService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  createCompany(requestContent: CreateCompanyInput): Observable<CreateCompanyMutation> {
    return from(this.amplifyService.CreateCompany(requestContent));
  }
}
