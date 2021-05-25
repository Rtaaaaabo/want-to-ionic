import { Injectable } from '@angular/core';
import { CreateCompanyService } from '../service/create-company.service';

@Injectable({
  providedIn: 'root'
})
export class CreateCompanyLogic {

  constructor(
    private createCompanyService: CreateCompanyService,
  ) { }
}
