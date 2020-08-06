import { Injectable } from '@angular/core';
import { APIService } from '../../../API.service';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private amplifyService: APIService) { }

  createRoom(companyId: string, message: string) {

  }
}
