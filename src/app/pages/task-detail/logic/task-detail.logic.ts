import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { concatMap, map, toArray } from 'rxjs/operators';
import { Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { SessionService } from 'src/app/shared/service/session.service';
import { CurrentUserInfo } from '../../task/interface/current-user-info.interface';
import { TaskDetailService } from '../service/task-detail.service';
import { Filesystem, Directory, Encoding, ReadFileResult, WriteFileResult } from '@capacitor/filesystem';
import { IImageFile, IS3Object, IsMessageContent, IMessageWithAttachUrl, MessageContent, TaskByCreatedAtItems, CurrentUser } from '../models/task-detail.interface';
import { environment } from 'src/environments/environment';
import {
  CreateMessageInput,
  GetTaskQuery,
  S3Object,
  TaskByCreatedAtQuery,
  UpdateTaskMutation,
  CreateMessageMutation,
} from 'src/app/shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailLogic {

  constructor(
    private taskDetailService: TaskDetailService,
    private sessionService: SessionService,
  ) { }

  /**
   * 任意のタスクの詳細情報を取得します
   * @param taskId TaskIDです
   * @returns Observable型で Taskの詳細情報を返します
   */
  fetchAnyTask(taskId: string): Observable<GetTaskQuery> {
    return from(this.taskDetailService.getTask(taskId));
  }

  /**
   * タスクあたりのMessageを返します
   * @param taskId TaskIDです
   * @returns Observable型で タスクあたりのMessageを返します
   */
  fetchMessagePerTask(taskId: string): Observable<TaskByCreatedAtQuery> {
    return this.taskDetailService.fetchMessagePerTask(taskId);
  }

  /**
   * Messageを送信したAuthorのImageUrlを取得します
   * @param items 昇降順になっているMessage Items
   * @returns 昇降順になっているMessageItems(authorIconWithUrlも含まれる)
   */
  // この返り値を修正する
  makeMessageAuthorImageUrl(items: Array<TaskByCreatedAtItems>): Observable<Array<TaskByCreatedAtItems>> {
    return from(items)
      .pipe(concatMap((messageItem) => this.fetchAnyUserIconUrl(messageItem)))
      .pipe(toArray());
  }

  /**
   * UserのImageIconのURLを取得して、MessageItems内のauthorIconWithUrlに格納します
   * @param item 昇降順になっているMessage Item
   * @returns TaskByCreatedAtItemsになっているItemを返します
   */
  fetchAnyUserIconUrl(item: TaskByCreatedAtItems): Observable<TaskByCreatedAtItems> {
    let messageWithAttachUrl = item;
    return this.taskDetailService.fetchUserIconKey(item.authorID)
      .pipe(concatMap((iconKey) => iconKey !== '' ? this.getStorage(iconKey) : of('')))
      .pipe(map((result) => messageWithAttachUrl.authorIconWithUrl = result))
      .pipe(map(() => messageWithAttachUrl))
  }

  /**
   * Message内Attachmentが存在するItemに対してAttachmentのURLを取得します
   * @param items 配列でType: Messageを取得します。
   * @returns Observable型で AttachmentのUrlを返します。
   */
  makeAttachmentUrl(items: Array<TaskByCreatedAtItems>): Observable<Array<Array<string | null>>> {
    return from(items)
      .pipe(concatMap((item) =>
        item.attachment !== null ? this.fetchMakeAttachmentUrl(item.attachment) : of([])))
      .pipe(toArray())
  }

  /**
   * Message内のAttachmentのURLを取得します
   * @param {S3Object} attachmentItem Message内の添付ファイル情報の配列です
   * @returns AttachmentのURLを取得し、配列で返します
   */
  fetchMakeAttachmentUrl(attachmentItem: Array<S3Object>): Observable<Array<string>> {
    return from(attachmentItem)
      .pipe(concatMap((attachment) => this.getStorage(attachment.key)))
      .pipe(toArray());
  }

  /**
   * Message内にAttachment情報を入れて成形します
   * @param arrayAttachmentUrl 配列のAttachmentのURL
   * @param {Array<IMessageWithAttachUrl>} resultMessage 配列のMessage
   * @returns Message内に AttachmentとAttachmentWithUrlを入れて返します
   */
  modifiedMessageItems(arrayAttachmentUrl, resultMessage: Array<IMessageWithAttachUrl>): Observable<Array<IMessageWithAttachUrl>> {
    let result: Array<IMessageWithAttachUrl> = resultMessage;
    resultMessage.forEach((_, index) => {
      result[index].attachmentWithUrl = arrayAttachmentUrl[index];
    });
    return of(result);
  }

  /**
   * 任意のタスクの情報をアップデートします
   * @param taskItem TaskItemのObject
   * @param status TaskItemのObject
   * @returns Observable型で updateTaskItemを返します
   */
  updateTaskItem(taskId: string, status: number): Observable<UpdateTaskMutation> {
    const content = {
      id: taskId,
      status: status,
    }
    return this.taskDetailService.updateTaskItem(content);
  }

  /**
   * Message（コメントを新規で作成します）
   * @param taskId TaskID
   * @param messageContent messageContent
   * @param userId userId
   * @param arrayAttachmentUri arrayAttachmentUri
   * @returns Observable型でcreateMessageItemを返します
   */
  sendNewMessage(taskId: string, messageContent: string, userId: string, arrayAttachment?: Array<IS3Object>): Observable<any> {
    let inputContent: CreateMessageInput = {
      id: `${taskId}_message_${uuid()}`,
      authorID: `${userId}`,
      content: messageContent,
      taskID: taskId,
      isSent: true,
    };
    if (arrayAttachment !== undefined) {
      inputContent.attachment = arrayAttachment;
    };
    return this.taskDetailService.createMessageItem(inputContent);
  }

  /**
   * s3Objectに当てはまるように整形します
   * @param key s3保存時に返されるKey値
   * @returns Observable型でIS3Objectを返します
   */
  makeS3Object(key: string): Observable<IS3Object> {
    const region = 'ap-northeast-1';
    const bucket = environment.bucket;
    const keyFile = `${key}`;
    const returnResult = {
      key: keyFile,
      region: region,
      bucket: bucket,
    }
    return of(returnResult);
  }

  /**
   * 新規で作られたMessageをSubscribeします
   * Observable<OnCreateMessageSubscription>
   * @returns Observable型でonMessageListenerを返します
   */
  onCreateMessageListener(): any {
    return this.taskDetailService.onMessageListener();
  }

  /**
   * ログイン済みのユーザーIDを取得します
   * @returns Observable型でCurrentUserInfoを返します
   */
  fetchCurrentUserInfo(): Observable<CurrentUserInfo> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  /**
   * 任意のRoomにTaskを追加します
   * @param dismissData dismissData
   * @param taskId taskId
   * @returns Observable型でupdateTaskItemを返します
   */
  updateTaskToRoom(dismissData, taskId: string): Observable<UpdateTaskMutation> {
    const content = {
      id: `${taskId}`,
      title: `${dismissData.nameItem}`,
      description: `${dismissData.descriptionItem}`,
      scheduleDate: `${dismissData.scheduleDateItem}`,
      chargePersonID: `${dismissData.chargePersonId}`,
    }
    return this.taskDetailService.updateTaskItem(content);
  }

  /**
   * Roomのメンバーを取得します
   * @param roomId roomId
   * @returns Observable型でfetchRoomMemberを返します
   */
  fetchMemberListOnRoom(roomId: string | number): Observable<any> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.taskDetailService.fetchRoomMember(filterContent);
  }

  /**
   * S3にアップロードするロジックです。
   * @param arrayBase64Data 配列型のBase64Dataを渡します。
   * @param taskId タスクのIDを渡します。
   * @returns Observable型でS3から返ってきた値を返します。
   */
  uploadFile(arrayBase64Data: Array<any>, taskId: string, currentUserId: string): Observable<IImageFile> {
    let fileName: string;
    let base64Data: any;
    let ext: string;
    let contentType: string;
    let uploadFileName: string;
    const dt = new Date();
    const dirName = this.getDirString(dt, currentUserId);
    return from(arrayBase64Data)
      .pipe(map((base64Result) => base64Data = base64Result))
      .pipe(concatMap((base64Data) => this.getContentType(base64Data)))
      .pipe(map((result) => contentType = result))
      .pipe(concatMap((contentType) => this.makeExt(contentType)))
      .pipe(map((result) => ext = result))
      .pipe(map(() => fileName = `attachment_${uuid()}_${taskId}`))
      .pipe(map(() => uploadFileName = `${dirName}/${fileName}.${ext}`))
      .pipe(concatMap(() => this.base64toBlob(base64Data, contentType)))
      .pipe(concatMap((blobFile) => this.putStorage(uploadFileName, blobFile, contentType)))
  }

  makeExt(contentType: string): Observable<string> {
    return of(contentType.match(/([^/]+?)?$/)[0]);
  }

  putStorage(fileName: string, blobFile: Blob, contentType: string): Observable<any> {
    return from(Storage.put(
      fileName,
      blobFile,
      {
        contentType: contentType,
      }
    ));
  }

  getStorage(fileName: string): Observable<any> {
    return from(Storage.get(fileName))
  }

  getDirString(dt: Date, currentUserId: string): string {
    return "" + currentUserId + "/" +
      ("00" + dt.getUTCFullYear()).slice(-2) +
      ("00" + (dt.getMonth() + 1)).slice(-2) +
      ("00" + dt.getUTCDate()).slice(-2) +
      ("00" + dt.getUTCHours()).slice(-2) +
      ("00" + dt.getMinutes()).slice(-2) +
      ("00" + dt.getUTCSeconds()).slice(-2);
  }

  fileWrite(fileName: string, fileData: string): Observable<WriteFileResult> {
    return from(Filesystem.writeFile({
      path: fileName,
      data: fileData,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    }));
  }

  fileRead(fileName: string): Observable<ReadFileResult> {
    return from(Filesystem.readFile({
      path: fileName,
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    }));
  }

  fileDelete(fileName: string): Observable<void> {
    return from(Filesystem.deleteFile({
      path: fileName,
      directory: Directory.Documents
    }));
  }

  getContentType(base64Data: any): Observable<string> {
    const block = base64Data.split(";");
    const contentType: string = block[0].split(":")[1];
    return of(contentType);
  }

  base64toBlob(base64data: any, contentType: string): Observable<Blob> {
    const byteCharacters = atob(base64data.replace(/^.*,/, ''));
    let buffer = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      buffer[i] = byteCharacters.charCodeAt(i);
    }
    const blob = new Blob([buffer.buffer], {
      type: contentType
    });
    return of(blob);
  }

  createMessage(data: UpdateTaskMutation, currentUserId: string, argContent?: string | IsMessageContent): Observable<CreateMessageMutation> {
    return this.createMessageContent(data, argContent, currentUserId)
      .pipe(concatMap((messageContent) => this.taskDetailService.createMessageItem(messageContent)));
  }

  createMessageContent(data: UpdateTaskMutation, argContent: string | IsMessageContent, currentUserId: string): Observable<MessageContent> {
    let messageContent = '';
    if (typeof (argContent) === "object") {
      if (argContent.data.hasTaskKind.chargePerson) {
        messageContent = `・担当者を ${data.chargePerson.username}に変更しました`;
      }
      if (argContent.data.hasTaskKind.description) {
        messageContent =
          `${messageContent}\n` +
          `・説明文を${argContent.data.taskValue.descriptionItem}に変更しました。`;
      }
      if (argContent.data.hasTaskKind.name) {
        messageContent =
          `${messageContent}\n` +
          `・タイトルを${argContent.data.taskValue.nameItem}に変更しました。`;
      }
      if (argContent.data.hasTaskKind.scheduleDate) {
        messageContent =
          `${messageContent}\n` +
          `・締め切りを${argContent.data.taskValue.scheduleDateItem}に変更しました。`;
      }
    } else {
      messageContent = argContent;
    }

    const content = {
      id: `${uuid()}`,
      taskID: `${data.id}`,
      authorID: `${currentUserId}`,
      content: `${messageContent}`
    }
    return of(content);
  }

  fetchAnyUserInfoFromList(email: string): Observable<Array<CurrentUser>> {
    return this.taskDetailService.checkRegistrationUser(email).pipe(map((result) => result.items));
  }

}
