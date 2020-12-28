import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { SessionService } from 'src/app/shared/service/session.service';
import { CurrentUserInfo } from '../../task/interface/current-user-info.interface';
import { TaskDetailService } from '../service/task-detail.service';
import { Filesystem, FilesystemDirectory, FilesystemEncoding, FileWriteResult, FileReadResult, FileDeleteResult } from "@capacitor/core";

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
  fetchAnyTask(taskId: string): Observable<any> {
    return from(this.taskDetailService.getTask(taskId));
  }

  fetchMessagePerTask(taskId: string): Observable<any> {
    const filterContent = {
      taskID: {
        eq: `${taskId}`
      }
    }
    return this.taskDetailService.fetchMessagePerTask(filterContent);
  }

  updateTaskItem(taskItem, status): Observable<any> {
    const content = {
      id: taskItem.id,
      status: status,
    }
    return this.taskDetailService.updateTaskItem(content);
  }

  sendNewMessage(taskId: string, messageContent: string, userId: string, arrayAttachmentUri?: Array<string>): Observable<any> {
    const inputContent = {
      id: `${uuid()}`,
      authorID: `${userId}`,
      content: messageContent,
      taskID: taskId,
      isSent: true,
      attachmentUri: arrayAttachmentUri,
    }
    return this.taskDetailService.createMessageItem(inputContent);
  }

  onCreateMessageListener() {
    return this.taskDetailService.onMessageListener();
  }

  fetchCurrentUserInfo(): Observable<CurrentUserInfo> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  updateTaskToRoom(dismissData, taskId): Observable<any> {
    const content = {
      id: `${taskId}`,
      title: `${dismissData.nameItem}`,
      description: `${dismissData.descriptionItem}`,
      scheduleDate: `${dismissData.scheduleDateItem}`,
    }
    return this.taskDetailService.updateTaskItem(content);
  }

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
   * @param fileName ファイルのディレクトリ名と名前を繋げています。
   * @param arrayBase64Data 配列型のBase64Dataを渡します。
   * @returns Observable型でS3から返ってきた値を返します。
   */
  uploadFile(fileName: string, arrayBase64Data: Array<any>): Observable<any> {
    let base64Data = '';
    let ext = '';
    let contentType = '';
    let uploadFileName = '';
    const dt = new Date();
    const dirName = this.getDirString(dt);
    return from(arrayBase64Data)
      .pipe(map((base64Result) => base64Data = base64Result))
      .pipe(concatMap((base64Data) => this.getContentType(base64Data)))
      .pipe(map((result) => contentType = result))
      .pipe(concatMap((contentType) => this.makeExt(contentType)))
      .pipe(map((result) => ext = result))
      .pipe(map(() => uploadFileName = `${dirName}/${fileName}.${ext}`))
      .pipe(concatMap(() => this.base64toBlob(base64Data, contentType)))
      .pipe(concatMap((blobFile) => this.putStorage(uploadFileName, blobFile, contentType)))
  }

  makeExt(contentType: string): Observable<string> {
    return of(contentType.match(/([^/]+?)?$/)[0]);
  }

  putStorage(fileName: string, blobFile: Blob, contentType: string): Observable<any> {
    return from(Storage.put(fileName, blobFile, {
      contentType: contentType
    }));
  }

  getStorage(fileName: string): Observable<any> {
    return from(Storage.get(fileName));
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
}
