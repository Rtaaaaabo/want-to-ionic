import { Injectable } from '@angular/core';
import { HomeService } from '../service/home-service.service';
import { SessionService } from '../../../shared/service/session.service';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Attribute {
  email: string,
  email_verified: boolean,
  sub: string,
};

@Injectable({
  providedIn: 'root',
})
export class HomeLogicService {

  constructor(
    private homeService: HomeService,
    private sessionService: SessionService,
  ) { }


  checkRegistrationUser(attribute: Attribute): Observable<any> {
    return this.homeService.checkRegistrationUser(attribute.email);
  }

  fetchCurrentUser(): Observable<Attribute> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes));
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
      id: formContent.get('id').value,
      companyID: 'takuCloudCom',
      email: formContent.get('targetEmail').value,
      username: formContent.get('userName').value,
      positionName: formContent.get('positionName').value,
      tel: formContent.get('tel').value,
      iconImage: formContent.get('iconImage').value,
    };
    console.log(`requestContent: ${requestContent}`);
    return this.homeService.createUser(requestContent);
  }

  listRoom(companyId: string): Observable<any> {
    return this.homeService.fetchRoomList(companyId).pipe(map((result) => result.items));
  }

  deleteRoomItem(roomId: string): Observable<any> {
    return this.homeService.deleteRoomItem(roomId);
  }
}
