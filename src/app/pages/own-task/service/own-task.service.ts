import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {
  AmplifyService,
  UpdateTaskMutation,
  GetUserQuery,
  GetRoomQuery,
  UpdateTaskInput,
} from 'src/app/shared/service/amplify.service';
import { ChargeTaskItems } from 'src/app/shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class OwnTaskService {

  constructor(
    private amplifyService: AmplifyService,
  ) { }

  /**
   * ユーザー情報に紐づくユーザーの情報を取得します
   * @param userId ユーザーID
   * @returns ユーザー情報
   */
  getUserInfo(userId: string): Observable<GetUserQuery> {
    return from(this.amplifyService.GetUser(userId));
  }

  /**
   * ルーム情報を取得します
   * @param taskItem 担当するタスク
   * @returns ルーム情報
   */
  fetchRoomInfoItem(taskItem: ChargeTaskItems): Observable<GetRoomQuery> {
    const roomId: string = taskItem.roomID;
    return from(this.amplifyService.GetRoom(roomId));
  }

  /**
   * タスク情報をアップデートします
   * @param content タスク情報をアップデートするもの
   * @returns タスク情報をアップデートした結果
   */
  updateTaskItem(content: UpdateTaskInput): Observable<UpdateTaskMutation> {
    return from(this.amplifyService.UpdateTask(content));
  }

  /**
   * ルームと担当者を作成したときに実行されます
   * @returns OnCreateRoomGroupListener
   */
  onCreateRoomGroupListener(): any {
    return from(this.amplifyService.OnCreateRoomGroupListener);
  }

  /**
   * ルームと担当者を更新したときに実行されます
   * @returns OnUpdateRoomGroupListener
   */
  onUpdateRoomGroupListener(): any {
    return from(this.amplifyService.OnUpdateRoomGroupListener);
  }

  /**
   * ルームと担当者を削除したときに実行されます
   * @returns OnDeleteRoomGroupListener
   */
  onDeleteRoomGroupListener(): any {
    return from(this.amplifyService.OnDeleteRoomGroupListener);
  }
}
