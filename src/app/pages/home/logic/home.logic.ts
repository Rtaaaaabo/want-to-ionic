import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, from, of } from 'rxjs';
import { concatMap, map, filter, toArray } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { HomeService } from '../service/home.service';
import { SessionService } from '../../../shared/service/session.service';
import { CreateRoomGroupMutation, CreateRoomMutation, CreateUserMutation, DeleteRoomMutation, ListUsersQuery, ModelRoomGroupFilterInput, S3Object, User, UpdateUserInput } from 'src/app/shared/service/amplify.service';
import { Storage } from 'aws-amplify';
import { CurrentUser, RoomGroupItems, InterfaceLogicArgsCreateRoom } from '../model/home.interface';
import { IS3Object } from '../../task-detail/models/task-detail.interface';

interface Attribute {
  name: string,
  email: string,
  email_verified: boolean,
  sub: string,
};

@Injectable({
  providedIn: 'root',
})
export class HomeLogic {

  constructor(
    private readonly homeService: HomeService,
    private readonly sessionService: SessionService,
  ) { }

  /**
   * 登録しているユーザ情報をチェックします
   * @param attribute 登録しているユーザ情報
   * @returns 登録しているユーザ情報を取得する
   */
  checkRegistrationUser(attribute: Attribute): Observable<ListUsersQuery> {
    return this.homeService.checkRegistrationUser(attribute.email);
  }

  /**
   * ログインしているユーザ情報をCognitoから取得します
   * @returns 現在ログインしているユーザー情報を取得する
   */
  fetchCurrentUser(): Observable<Attribute> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  /**
  * Roomを新規で作成するメソッドです
  * @param content ルーム作成するのに必要な情報
  * @returns Roomを新規作成してその値を取得します
  */
  createRoom(content: InterfaceLogicArgsCreateRoom, currentUser: CurrentUser): Observable<CreateRoomMutation> {
    const requestContent = {
      id: `${currentUser.companyID}_room_${uuid()}`,
      companyID: `${currentUser.companyID}`,
      name: content.nameItem,
      description: content.descriptionItem,
    };
    return this.homeService.createRoom(requestContent);
  }

  /**
   * ユーザ情報を新規で作成します
   * @param formContent Form型のユーザ
   * @returns ユーザを新規で作成してその結果を返します
   */
  createUser(formContent: FormGroup): Observable<CreateUserMutation> {
    const resultFormIconImageUrl = formContent.get('keyAvatarImage').value;
    const region = 'ap-northeast-1';
    const bucket = 'wattofilestorage234052-dev';
    let avatarUserImage: IS3Object;
    if (resultFormIconImageUrl !== '') {
      avatarUserImage = {
        key: resultFormIconImageUrl,
        bucket: bucket,
        region: region,
      }
    } else {
      avatarUserImage = {
        key: '',
        bucket: bucket,
        region: region,
      }
    }
    const requestContent = {
      id: formContent.get('id').value,
      username: formContent.get('userName').value,
      email: formContent.get('targetEmail').value,
      companyID: 'takuCloudCom',
      tel: formContent.get('tel').value,
      positionName: formContent.get('positionName').value,
      iconImage: avatarUserImage,
      registered: true,
    };
    return this.homeService.createUser(requestContent);
  }

  updateUser(formContent: FormGroup, extraData): Observable<any> {
    console.log('updateUser formContent', formContent.value);
    const resultFormIconImageUrl = formContent.get('keyAvatarImage').value;
    const region = 'ap-northeast-1';
    const bucket = 'wattofilestorage234052-dev';
    const requestContent: UpdateUserInput = {
      id: formContent.get('id').value,
      username: formContent.get('userName').value,
      email: formContent.get('targetEmail').value,
      companyID: extraData.companyId,
      tel: formContent.get('tel').value ? formContent.get('tel').value : '',
      positionName: formContent.get('positionName').value ? formContent.get('positionName').value : '',
    };
    if (resultFormIconImageUrl !== null) {
      requestContent.iconImage = {
        key: resultFormIconImageUrl,
        bucket: bucket,
        region: region,
      }
    }
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

  fetchRoomMembers(roomId: string, currentUserId: string): Observable<Array<RoomGroupItems>> {
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

  fetchRoomList(currentUseId: string): Observable<Array<RoomGroupItems>> {
    const filterContent = {
      userID: {
        eq: currentUseId
      }
    }
    return this.homeService.fetchRoomList(filterContent)
      .pipe(map(({ items }) => items));
  }

  uploadAvatarIconUrl(base64Data: any, userId: string): Observable<any> {
    let contentType: string;
    let fileName: string;
    let uploadFilePath: string;
    let ext: string;
    const dt = new Date();
    const dateDir = this.getDirString(dt, userId);
    return this.getContentType(base64Data)
      .pipe(map((result) => contentType = result))
      .pipe(concatMap((contentType) => this.makeExt(contentType)))
      .pipe(map(result => ext = result))
      .pipe(map(() => fileName = `avatar_${uuid()}_/${dateDir}`))
      .pipe(map(() => uploadFilePath = `${fileName}.${ext}`))
      .pipe(concatMap(() => this.base64toBlob(base64Data, contentType)))
      .pipe(concatMap((blobFile) => this.putStorage(uploadFilePath, blobFile, contentType)));
  }

  getDirString(dt: Date, userId: string): string {
    return "" + userId + "/" +
      ("00" + dt.getUTCFullYear()).slice(-2) +
      ("00" + (dt.getMonth() + 1)).slice(-2) +
      ("00" + dt.getUTCDate()).slice(-2) +
      ("00" + dt.getUTCHours()).slice(-2) +
      ("00" + dt.getMinutes()).slice(-2) +
      ("00" + dt.getUTCSeconds()).slice(-2);
  }

  setExitsRoomAndUser(data: Array<RoomGroupItems>): Observable<any> {
    return from(data)
      .pipe(filter((item: RoomGroupItems) => item.room !== null))
      .pipe(filter((item: RoomGroupItems) => item.user !== null))
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

  makeS3Object(key: string): Observable<IS3Object> {
    const region = 'ap-northeast-1';
    const bucket = 'wattofilestorage234052-dev';
    const keyFile = `public/${key}`;
    const returnResult = {
      key: keyFile,
      region: region,
      bucket: bucket
    }
    return of(returnResult);
  }

  getStorage(filePathName: string): Observable<any> {
    return from(Storage.get(filePathName));
  }

  fetchAnyUserInfoFromList(email: string): Observable<ListUsersQuery> {
    return this.homeService.checkRegistrationUser(email);
  }

}
