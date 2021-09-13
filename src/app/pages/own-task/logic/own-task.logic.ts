import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatMap, map, toArray, filter } from 'rxjs/operators';
import { GetRoomQuery, UpdateTaskMutation } from 'src/app/shared/service/amplify.service';
import { SessionService } from 'src/app/shared/service/session.service';
import { OwnTaskService } from '../service/own-task.service';
import { CurrentUser, TaskFormItem } from '../model/own-task.interface';
import { Attribute, ChargeTask, ChargeTaskItems } from 'src/app/shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class OwnTaskLogic {

  constructor(
    private readonly ownTaskService: OwnTaskService,
    private readonly sessionService: SessionService,
  ) { }

  /**
   * ログインしているユーザーの取得
   * @returns Cognitoに登録しているユーザーデータ
   */
  fetchCurrentUser(): Observable<Attribute> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  /**
   * 担当しているタスク情報を取得する
   * @param userId ユーザID
   * @returns 担当タスク情報
   */
  getTaskChargeItems(userId: string): Observable<ChargeTask> {
    return this.ownTaskService.getUserInfo(userId)
      .pipe(map((result) => result.chargeTask));
  }

  /**
   * ルームごとのタスクをセットする
   * @param arrayTask タスクの配列
   * @returns タスクとルーム
   */
  setTaskPerRoom(arrayTask: Array<ChargeTaskItems>): Observable<Array<TaskFormItem>> {
    return from(arrayTask)
      .pipe(concatMap((taskItem) => this.fetchRoomInfo(taskItem)))
      .pipe(toArray());
  }

  /**
   * ルームの情報を取得する
   * @param taskItems 担当のタスク
   * @returns タスクとルーム
   */
  fetchRoomInfo(taskItems: ChargeTaskItems): Observable<TaskFormItem> {
    return this.ownTaskService.fetchRoomInfoItem(taskItems)
      .pipe(filter((result) => result !== null))
      .pipe(concatMap((roomInfo) => this.makeOwnTaskItems(taskItems, roomInfo)))
  }

  /**
   * 非同期でタスクとルームの対を返す
   * @param taskItem 担当するタスク
   * @param roomInfo ルーム情報
   * @returns タスクとルーム
   */
  makeOwnTaskItems(taskItem: ChargeTaskItems, roomInfo: GetRoomQuery): Observable<{ task: ChargeTaskItems, room: GetRoomQuery }> {
    return of({
      task: taskItem,
      room: roomInfo,
    });
  }

  /**
   * 完了していないタスクとルーム情報を返します
   * @param itemsArray タスクとルームの配列
   * @returns タスクとルームの配列
   */
  filterExceptDoneTask(itemsArray: Array<{ task: ChargeTaskItems, room: GetRoomQuery }>): Observable<Array<TaskFormItem>> {
    return from(itemsArray.filter(item => item.task.status < 10))
      .pipe(toArray());
  }

  /**
   * タスク情報の更新
   * @param taskFormItem タスクとルーム情報
   * @param status ステータス情報
   * @returns 更新したタスク情報
   */
  updateDoneTaskItem(taskId: string, status: number): Observable<UpdateTaskMutation> {
    const content = {
      id: taskId,
      status: status,
    };
    return this.ownTaskService.updateTaskItem(content);
  }

  /**
   * ログインしているユーザ情報を取得する
   * @param email E-mail
   * @returns ログインしているユーザー
   */
  fetchAnyUserInfoFromList(email: string): Observable<Array<CurrentUser>> {
    return this.sessionService.fetchUserInfo(email)
      .pipe(map(({ items }) => items));
  }

}
