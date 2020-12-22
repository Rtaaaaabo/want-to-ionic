import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
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

  sendNewMessage(taskId, messageContent, userId): Observable<any> {
    const inputContent = {
      id: `${uuid()}`,
      authorID: `${userId}`,
      content: messageContent,
      taskID: taskId,
      isSent: true,
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
    const iosStringDate = (new Date()).toISOString();
    console.log(dismissData);
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
}
