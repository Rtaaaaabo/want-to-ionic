import { Injectable } from '@angular/core';
import { HomeService } from '../service/home.service';
import { SessionService } from '../../../shared/service/session.service';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ModelRoomGroupFilterInput } from 'src/app/shared/service/amplify.service';

interface Attribute {
  email: string,
  email_verified: boolean,
  sub: string,
};

@Injectable({
  providedIn: 'root',
})
export class HomeLogic {

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
    return this.homeService.createUser(requestContent);
  }

  // listRoom(companyId: string, currentUserId?: string): Observable<any> {
  //   const filterContent = {
  //     companyID: {
  //       eq: companyId
  //     }
  //   }
  //   return this.homeService.fetchRoomList(filterContent)
  //     .pipe(map((result) => result.items));
  // }

  deleteRoomItem(roomId: string): Observable<any> {
    return this.homeService.deleteRoomItem(roomId);
  }

  createUserRoomGroup(userId, roomId): Observable<any> {
    const content = {
      id: `user-room-group-${uuid()}`,
      roomID: `${roomId}`,
      userID: `${userId}`,
    }
    return this.homeService.createUserRoomGroup(content);
  }

  fetchRoomMembers(roomId: string, currentUserId: string): Observable<any> {
    const filterContent: ModelRoomGroupFilterInput = {
      roomID: {
        eq: `${roomId}`
      },
      userID: {
        ne: `${currentUserId}`
      }
    }
    return this.homeService.fetchRoomMembers(filterContent)
      .pipe(map((result) => result.items));
  }

  removeMeFromRoom(roomId: string, meId: string): Observable<any> {
    return this.fetchRoomGroupsId(roomId, meId)
      .pipe(concatMap((roomGroupId) => this.homeService.deleteRoomGroupsItem(roomGroupId)))
  }

  fetchRoomGroupsId(roomId: string, meId: string): Observable<string> {
    const filterContent = {
      roomID: {
        eq: roomId,
      },
      userID: {
        eq: meId,
      }
    }
    return this.homeService.fetchRoomGroupsId(filterContent)
      .pipe(map(({ items }) => items[0].id));
  }

  fetchRoomList(currentUseId: string): Observable<Array<any>> {
    const filterContent = {
      userID: {
        eq: currentUseId
      }
    }
    return this.homeService.fetchRoomList(filterContent)
      .pipe(map(({ items }) => items));
  }
}
