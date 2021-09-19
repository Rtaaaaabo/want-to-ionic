import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import {
  map,
  filter,
  toArray,
  concatMap,
  findIndex,
} from "rxjs/operators";
import {
  CreateMessageInput,
  CreateRoomGroupMutation,
  CreateTaskMutation,
  GetRoomQuery,
  GetUserQuery,
  ListRoomGroupsQuery,
  ListUsersQuery,
  UpdateTaskMutation,
  GetCompanyQuery,
  UpdateRoomInput,
  CreateMessageMutation,
} from "src/app/shared/service/amplify.service";
import { SessionService } from "../../../shared/service/session.service";
import { TaskFormModel } from 'src/app/shared/model/task-form.model';
import { v4 as uuid } from "uuid";
import { TaskService } from "../service/task.service";
import { CurrentUserInfo } from "../interface/current-user-info.interface";
import { InterfaceTask } from "src/app/interfaces/task.interface";
import { CurrentUser } from '../model/task-member.model';
import { MessageContent, IsMessageContent } from '../../task-detail/models/task-detail.interface';


@Injectable({
  providedIn: "root",
})
export class TaskLogic {
  constructor(
    private taskService: TaskService,
    private sessionService: SessionService
  ) { }

  /**
   * ルーム情報を取得します
   * @param roomId ルームID
   * @returns ルーム情報
   */
  fetchRoomInfo(roomId: string): Observable<GetRoomQuery> {
    return this.taskService.fetchRoomInfo(roomId);
  }

  /**
   * Cognitoに登録しているユーザーのAttributeを取得します
   * @returns ユーザーのAttribute
   */
  fetchCurrentUserCognitoInfo(): Observable<CurrentUserInfo> {
    return this.sessionService
      .fetchCurrentUser()
      .pipe(map((res) => res.attributes));
  }

  /**
   * フォーム経由でタスクを登録します
   * @param taskFormData Formで入力した登録するタスク情報
   * @param roomId ルームID
   * @param userId ユーザーID
   * @returns 登録したタスク情報
   */
  createTaskToRoom(
    taskFormData: TaskFormModel,
    roomId: string,
    userId: string,
  ): Observable<CreateTaskMutation> {
    const isoStringDate = new Date().toISOString();
    if (taskFormData === undefined) {
      return of();
    } else {
      const content = {
        id: `${uuid()}`,
        authorID: `${userId}`,
        roomID: `${roomId}`,
        chargePersonID: `${taskFormData.chargePersonId}`,
        title: `${taskFormData.nameItem}`,
        description: `${taskFormData.descriptionItem}`,
        scheduleDate: `${taskFormData.scheduleDateItem}`,
        createdAt: `${isoStringDate}`,
        status: 0,
        priority: 0,
      };
      return this.taskService.createTaskItem(content);
    }
  }

  /**
   * ルームとユーザーを結びつけます
   * @param userId ユーザーID
   * @param roomId ルームID
   * @returns ルームグループを作成した情報
   */
  createRoomGroup(userId: string, roomId: string): Observable<CreateRoomGroupMutation> {
    const content = {
      id: `room-group${uuid()}`,
      roomID: `${roomId}`,
      userID: `${userId}`,
    };
    return this.taskService.createRoomGroup(content);
  }

  /**
   * それぞれのタスクステータスに一致するタスクを取得します
   * @param items 配列でのタスク情報
   * @param targetStatus タスクのステータス情報
   * @returns 配列でのタスク情報
   */
  fetchEachStatusTask(items: Array<InterfaceTask>, targetStatus: number): Observable<Array<InterfaceTask>> {
    return from(items)
      .pipe(filter((data) => data.status === targetStatus))
      .pipe(toArray());
  }

  /**
   * アクティブのタスクを取得します
   * @param roomId ルームID
   * @returns タスク情報
   */
  fetchActiveTaskPerRoom(roomId: string): Observable<Array<InterfaceTask>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`,
      },
    };
    return this.taskService
      .fetchTaskItemsPerRoom(filterContent)
      .pipe(map((res) => res.items))
  }

  /**
   * 完了済みのタスクを取得します
   * @param roomId ルームID
   * @returns タスク情報
   */
  fetchDoneTaskPerRoom(roomId: string): Observable<Array<InterfaceTask>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`,
      },
    };
    return this.taskService
      .fetchTaskItemsPerRoom(filterContent)
      .pipe(map((res) => res.items));
  }

  /**
   * タスクを完了済みに更新します
   * @param taskId タスクID
   * @param status タスクステータス
   * @returns タスクを完了にした情報
   */
  updateDoneTaskItem(taskId: string, status: number): Observable<UpdateTaskMutation> {
    const content = {
      id: taskId,
      status: status,
    };
    return this.taskService.updateTaskItem(content);
  }

  /**
   * 配列のタスクアイテムのステータスを更新します
   * @param taskItems 配列でのタスク情報
   * @returns 更新したタスク情報
   */
  updateStatusTaskItems(taskItems: Array<InterfaceTask>): Observable<Array<UpdateTaskMutation>> {
    return from(taskItems)
      .pipe(
        concatMap((result: InterfaceTask) =>
          this.taskService.updateTaskStatusItem(result)
        )
      )
      .pipe(toArray());
  }

  /**
   * タスク並び替え時にインデックス値を取得します
   * @param taskActiveItems ルームに紐づく配列のタスク情報
   * @param taskActiveItem 並び替え対象タスク情報
   * @returns インデックス値
   */
  getIndexNewArray(taskActiveItems: Array<InterfaceTask>, taskActiveItem: InterfaceTask): Observable<number> {
    return from(taskActiveItems)
      .pipe(findIndex(taskItem => taskItem.id === taskActiveItem.id))
  }

  /**
   * タスクの並び替えを行ったときに各タスクのステータスを変更します
   * @param indexArray 配列内のタスクのIndex
   * @param taskActiveItems アクティブのタスク情報
   * @returns 更新したタスク情報
   */
  updateTaskItemPriority(indexArray: number, taskActiveItems: Array<InterfaceTask>): Observable<UpdateTaskMutation> {
    const targetTaskItem = taskActiveItems[indexArray];
    const content = {
      id: targetTaskItem.id,
      priority: indexArray
    };
    return this.taskService.updateTaskStatusForReorder(content);
  }

  /**
   * ユーザーIDに紐づくユーザー情報を取得します
   * @param userId ユーザーID
   * @returns ユーザー情報
   */
  fetchUserInfoFromAmplify(userId: string): Observable<GetUserQuery> {
    return this.taskService.fetchUserInfo(userId);
  }

  /**
   * 会社に所属しているメンバーを取得します
   * @param companyId 会社ID
   * @param queryFilterUser 検索対象の文字
   * @returns 配列のメンバー情報
   */
  fetchCompanyMember(
    companyId: string,
    queryFilterUser?: string
  ): Observable<ListUsersQuery | any> {
    const filterContent = queryFilterUser !== undefined ?
      {
        companyID: {
          eq: `${companyId}`,
        },
        username: {
          contains: queryFilterUser,
        },
      } :
      {
        companyID: {
          eq: `${companyId}`,
        },
      }
    return this.taskService.fetchCompanyMember(filterContent);
  }

  /**
   * ルームに所属するユーザー情報を取得します
   * @param roomId ルームID
   * @returns ルームに所属するユーザー情報
   */
  fetchMemberListOnRoom(
    roomId: string | number
  ): Observable<ListRoomGroupsQuery> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`,
      },
    };
    return this.taskService.fetchRoomMember(filterContent);
  }

  /**
   * 各タスクの優先順位を計算します
   * @param a 比較するタスク情報
   * @param b 比較するタスク直後情報
   * @returns 比較した結果のタスクの優先順位
   */
  compareTaskArray(a: InterfaceTask, b: InterfaceTask): number {
    const priorityA = a.priority;
    const priorityB = b.priority;
    return priorityA - priorityB;
  }

  /**
   * ユーザーに紐づくルーム情報を作成します
   * @param userId ユーザーID
   * @param roomId ルームID
   * @returns ルームグループを作成した情報
   */
  createUserRoomGroup(userId: string, roomId: string): Observable<CreateRoomGroupMutation> {
    const content = {
      id: `user-room-group-${uuid()}`,
      roomID: `${roomId}`,
      userID: `${userId}`,
    }
    return this.taskService.createUserRoomGroup(content);
  }

  /**
   * ルームにメンバーを追加します
   * @param arrayUserId ルームに追加するユーザーのID
   * @param roomId ルームID
   * @returns ルームグループを更新した情報
   */
  addMembersToAnyRoom(arrayUserId: Array<string>, roomId: string): Observable<CreateRoomGroupMutation> {
    return from(arrayUserId)
      .pipe(concatMap((userId) => this.createUserRoomGroup(userId, roomId)));
  }

  /**
   * 並び替えを行った場合にメッセージを送信します
   * @param data メッセージを送る対象のタスク情報
   * @returns メッセージを送信した結果
   */
  reorderTaskMessage(data: UpdateTaskMutation): Observable<CreateMessageMutation> {
    const createContent: CreateMessageInput = {
      id: `${uuid()}`,
      taskID: `${data.id}`,
      authorID: `${data.authorID}`,
      content: `優先度 ${data.priority + 1} 番目に移動しました`,
    }
    return this.taskService.updateMessage(createContent);
  }

  /**
   * 会社に所属しているメンバー
   * @param companyId 会社ID
   * @returns 会社情報
   */
  fetchCompanyMembers(companyId: string): Observable<GetCompanyQuery> {
    return this.taskService.fetchAnyCompany(companyId);
  }

  /**
   * E-mailに一致するユーザー情報
   * @param email E-mail
   * @returns ログインしているユーザー情報
   */
  fetchAnyUserInfoFromList(email: string): Observable<Array<CurrentUser>> {
    return this.taskService.fetchAnyUserInfoFromList(email)
      .pipe(map((result) => result.items))
  }

  /**
   * ルーム情報を更新します
   * @param result 更新する情報
   * @param roomId ルーム情報
   * @returns ルーム情報を更新した結果
   */
  updateRoom(roomInfo: { nameItem: string, descriptionItem: string }, roomId: string): Observable<any> {
    const requestContent: UpdateRoomInput = {
      id: roomId,
      name: roomInfo.nameItem,
      description: roomInfo.descriptionItem,
    }
    return this.taskService.updateRoom(requestContent);
  }

  /**
   * ルーム情報が更新されたときに実行される
   * @returns onUpdateRoomListener
   */
  onUpdateRoomListener(): any {
    return this.taskService.onUpdateRoomListener();
  }

  /**
   * タスク情報が作成されたときに実行される
   * @returns onUpdateRoomListener
   */
  onCreateTaskListener(): any {
    return this.taskService.onCreateTaskListener();
  }

  /**
   * タスク情報が作成されたときに実行される
   * @returns onUpdateRoomListener
   */
  onUpdateTaskListener(): any {
    return this.taskService.onUpdateTaskListener();
  }

  createMessage(data: UpdateTaskMutation, argContent?: string | IsMessageContent): Observable<any> {
    return this.createMessageContent(data, argContent)
      .pipe(concatMap((messageContent) => this.taskService.createMessageItem(messageContent)));
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
