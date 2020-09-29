import { Injectable } from '@angular/core';
import { HomeService } from '../service/home-service.service';
import { SessionService } from '../../../shared/service/session.service';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeLogicService {

  constructor(
    private homeService: HomeService,
    private sessionService: SessionService,
  ) { }


  checkRegistrationUser(email: string): Observable<any> {
    return this.homeService.checkRegistrationUser(email);
  }

  fetchCurrentUser(): Observable<string> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes.email));
  }

  createRoom(content): Observable<any> {
    const requestContent = {
      id: `${uuid()}`,
      companyID: 'takuCloudCom',
      name: content.nameItem,
      description: content.descriptionItem,
    };
    return this.homeService.createRoom(requestContent);
  }

  createUser(formContent): Observable<any> {
    const requestContent = {
      id: `${uuid()}`,
      companyID: 'takuCloudCom',
      email: formContent.get('targetEmail').value,
      username: formContent.get('userName').value,
      positionName: formContent.get('positionName').value,
      tel: formContent.get('tel').value,
      iconImage: formContent.get('iconImage').value,
    };
    return this.homeService.createUser(requestContent);
  }

  listRoom(companyId: string): Observable<any> {
    return this.homeService.fetchRoomList(companyId).pipe(map((result) => result.items));
  }

  deleteRoomItem(roomId: string): Observable<any> {
    return this.homeService.deleteRoomItem(roomId);
  }
}
