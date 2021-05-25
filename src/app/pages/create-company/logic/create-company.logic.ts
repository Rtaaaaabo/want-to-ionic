import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateCompanyInput } from 'src/app/shared/service/amplify.service';
import { CreateCompanyService } from '../service/create-company.service';

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
}
