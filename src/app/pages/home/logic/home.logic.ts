import { Injectable } from '@angular/core';
import { HomeService } from '../service/home.service';
import { SessionService } from '../../../shared/service/session.service';
import { v4 as uuid } from 'uuid';
import { Observable, from, of } from 'rxjs';
import { concatMap, map, filter, toArray } from 'rxjs/operators';
import { CreateRoomGroupMutation, CreateRoomMutation, CreateUserMutation, DeleteRoomMutation, ListUsersQuery, ModelRoomGroupFilterInput } from 'src/app/shared/service/amplify.service';
import { ResponseListRoomGroupsQueryItems } from '../service/reponse/response.model';
import { Storage } from 'aws-amplify';
import { ILResponseFetchRoomMembers, InterfaceLogicArgsCreateRoom } from '../model/home.interface';
import { FormGroup } from '@angular/forms';

interface Attribute {
  email: string,
  email_verified: boolean,
  sub: string,
};

const OneWeekSecond = 64480;

@Injectable({
  providedIn: 'root',
})
export class HomeLogic {

  constructor(
    private readonly homeService: HomeService,
    private readonly sessionService: SessionService,
  ) { }

  checkRegistrationUser(attribute: Attribute): Observable<ListUsersQuery> {
    return this.homeService.checkRegistrationUser(attribute.email);
  }

  fetchCurrentUser(): Observable<Attribute> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  createRoom(content: InterfaceLogicArgsCreateRoom): Observable<CreateRoomMutation> {
    const requestContent = {
      id: `${uuid()}`,
      companyID: 'takuCloudCom',
      name: content.nameItem,
      description: content.descriptionItem,
    };
    return this.homeService.createRoom(requestContent);
  }

  createUser(formContent: FormGroup): Observable<CreateUserMutation> {
    console.log(formContent);
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

  updateUser(formContent: FormGroup): Observable<any> {
    const requestContent = {
      id: formContent.get('id').value,
      companyID: 'takuCloudCom',
      email: formContent.get('targetEmail').value,
      username: formContent.get('userName').value,
      positionName: formContent.get('positionName').value,
      tel: formContent.get('tel').value,
      iconImage: formContent.get('iconImage').value,
    };
    console.log('[requestContent]', requestContent);
    return this.homeService.updateUser(requestContent);
  }

  deleteRoomItem(roomId: string): Observable<DeleteRoomMutation> {
    return this.homeService.deleteRoomItem(roomId);
  }

  createUserRoomGroup(userId: string, roomId: string): Observable<CreateRoomGroupMutation> {
    const content = {
      id: `user-room-group-${uuid()}`,
      roomID: `${roomId}`,
      userID: `${userId}`,
    }
    return this.homeService.createUserRoomGroup(content);
  }

  fetchRoomMembers(roomId: string, currentUserId: string): Observable<Array<ILResponseFetchRoomMembers>> {
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
      .pipe(concatMap((roomGroupId) => this.homeService.deleteRoomGroupsItem(roomGroupId)));
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

  fetchRoomList(currentUseId: string): Observable<Array<ResponseListRoomGroupsQueryItems>> {
    const filterContent = {
      userID: {
        eq: currentUseId
      }
    }
    return this.homeService.fetchRoomList(filterContent)
      .pipe(map(({ items }) => items));
  }

  fetchAvatarIconUrl(base64Data: any, userId: string): Observable<any> {
    let contentType: string;
    let fileName: string;
    let uploadFilePath: string;
    let ext: string;
    const dt = new Date();
    const dateDir = this.getDirString(dt);
    const dirName = userId;
    return this.getContentType(base64Data)
      .pipe(map((result) => contentType = result))
      .pipe(concatMap((contentType) => this.makeExt(contentType)))
      .pipe(map(result => ext = result))
      .pipe(map(() => fileName = `avatar/${dateDir}_${uuid()}`))
      .pipe(map(() => uploadFilePath = `${dirName}/${fileName}.${ext}`))
      .pipe(concatMap(() => this.base64toBlob(base64Data, contentType)))
      .pipe(concatMap((blobFile) => this.putStorage(uploadFilePath, blobFile, contentType)));
  }

  getDirString(dt: Date): string {
    const random = dt.getTime() + Math.floor(100000 * Math.random());
    const randomMath = Math.random() * random;
    const randomFloor = randomMath.toString(16);
    return "" +
      ("00" + dt.getUTCFullYear()).slice(-2) +
      ("00" + (dt.getMonth() + 1)).slice(-2) +
      ("00" + dt.getUTCDate()).slice(-2) +
      ("00" + dt.getUTCHours()).slice(-2) +
      ("00" + dt.getMinutes()).slice(-2) +
      ("00" + dt.getUTCSeconds()).slice(-2) +
      "-" + randomFloor;
  }

  setExitsRoomAndUser(data): Observable<any> {
    return from(data)
      .pipe(filter((item: ResponseListRoomGroupsQueryItems) => item.room !== null))
      .pipe(filter((item: ResponseListRoomGroupsQueryItems) => item.user !== null))
      .pipe(toArray());
  }

  getContentType(base64data): Observable<string> {
    const block = base64data.split(";");
    const contentType = block[0].split(":")[1];
    return of(contentType)
  }

  makeExt(contentType: string): Observable<string> {
    return of(contentType.match(/([^/]+?)?$/)[0]);
  }

  base64toBlob(base64Data: any, contentType: string): Observable<Blob> {
    const byteCharacters = atob(base64Data.replace(/^.*,/, ''));
    let buffer = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      buffer[i] = byteCharacters.charCodeAt(i);
    }
    const blob = new Blob([buffer.buffer], {
      type: contentType
    });
    return of(blob);
  }

  putStorage(uploadFileName: string, blobFile: Blob, contentType: string): Observable<Object> {
    return from(Storage.put(
      uploadFileName,
      blobFile,
      {
        contentType: contentType,
      }
    ));
  }

  getStorage(filePathName: string): Observable<any> {
    return from(Storage.get(filePathName));
  }
}
