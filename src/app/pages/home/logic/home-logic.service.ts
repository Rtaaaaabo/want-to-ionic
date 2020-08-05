import { Injectable } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';

@Injectable({
  providedIn: 'root'
})
export class HomeLogicService {

  constructor(service: HomeServiceService) { }
}
