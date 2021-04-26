import { Injectable } from '@angular/core';
import { Observable, from, of, concat } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { SessionService } from 'src/app/shared/service/session.service';
import { CurrentUserInfo } from '../../task/interface/current-user-info.interface';
import { TaskDetailService } from '../service/task-detail.service';
import { Filesystem, FilesystemDirectory, FilesystemEncoding, FileWriteResult, FileReadResult, FileDeleteResult } from "@capacitor/core";
import { GetTaskQuery, OnCreateCompanySubscription, OnCreateMessageSubscription, UpdateTaskMutation } from 'src/app/shared/service/amplify.service';
import { IsMessageContent, IMessageAttachment, MessageContent } from '../models/task-detail.interface';

const OneWeekSecond = 604800;

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
  fetchMessagePerTask(taskId: string): Observable<any> {
    return this.taskDetailService.fetchMessagePerTask(taskId)
  }

  /**
   * 任意のタスクの情報をアップデートします
   * @param taskItem TaskItemのObject
   * @param status TaskItemのObject
   * @returns Observable型で updateTaskItemを返します
   */
  updateTaskItem(taskItem, status): Observable<any> {
    const content = {
      id: taskItem.id,
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
  sendNewMessage(taskId: string, messageContent: string, userId: string, arrayAttachmentUri?: Array<string>): Observable<any> {
    let inputContent = {
      id: `${uuid()}`,
      authorID: `${userId}`,
      content: messageContent,
      taskID: taskId,
      isSent: true,
      attachment: {},
    };
    if (arrayAttachmentUri !== undefined) {
      inputContent.attachment = arrayAttachmentUri;
    }
    return this.taskDetailService.createMessageItem(inputContent);
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
  updateTaskToRoom(dismissData, taskId): Observable<UpdateTaskMutation> {
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
  uploadFile(arrayBase64Data: Array<any>, taskId: string): Observable<any> {
    let fileName: string;
    let base64Data: any;
    let ext: string;
    let contentType: string;
    let uploadFileName: string;
    const dt = new Date();
    const dirName = this.getDirString(dt);
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

  fileWrite(fileName: string, fileData: string): Observable<FileWriteResult> {
    return from(Filesystem.writeFile({
      path: fileName,
      data: fileData,
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8,
    }));
  }

  fileRead(fileName: string): Observable<FileReadResult> {
    return from(Filesystem.readFile({
      path: fileName,
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8
    }));
  }

  fileDelete(fileName: string): Observable<FileDeleteResult> {
    return from(Filesystem.deleteFile({
      path: fileName,
      directory: FilesystemDirectory.Documents
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

  createMessage(data: UpdateTaskMutation, argContent?: string | IsMessageContent): Observable<any> {
    return this.createMessageContent(data, argContent)
      .pipe(concatMap((messageContent) => this.taskDetailService.createMessageItem(messageContent)));
  }

  createMessageContent(data, argContent): Observable<MessageContent> {
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
      authorID: `${data.authorID}`,
      content: `${messageContent}`
    }
    return of(content);
  }

}
