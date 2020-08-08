import { Injectable } from '@angular/core';
import { HomeService } from '../service/home-service.service';
import { HomePageModule } from '../home.module';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class HomeLogicService {

  constructor(
    private homeService: HomeService,
  ) { }

  createRoom(content) {
    const requestContent = {
      id: `${uuid}`,
      companyID: 'takuCloudCom',
      name: content.nameItem,
      description: content.descriptionItem,
    };
    return this.homeService.createRoom(requestContent).subscribe((data) => {
      return data;
    });
  }
}
