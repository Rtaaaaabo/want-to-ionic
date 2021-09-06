import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  AmplifyService,
  ListRoomGroupsQuery,
  ModelRoomGroupFilterInput,
  ModelUserFilterInput,
  ListUsersQuery,
  DeleteRoomMutation,
  DeleteRoomGroupMutation,
  CreateRoomGroupInput,
  CreateRoomGroupMutation,
  GetUserQuery,
} from '../../../shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class RoomMemberService {

  constructor(
    private readonly amplifyService: AmplifyService,
  ) { }

  /**
   * 会社に所属しているメンバーを取得する
   * @param content フィルター
   * @returns メンバー情報
   */
  fetchCompanyMember(content: ModelUserFilterInput): Observable<ListUsersQuery> {
    return from(this.amplifyService.ListUsers(content));
  }

  /**
   * ルームメンバーを取得する
   * @param filterContent フィルター項目
   * @returns ルームメンバーグループ情報
   */
  fetchRoomMember(filterContent?: ModelRoomGroupFilterInput): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(filterContent));
  }

  /**
   * ルームメンバーグループを作成する
   * @param filterContent フィルター項目
   * @returns ルームグループ
   */
  createUserRoomGroup(filterContent: CreateRoomGroupInput): Observable<CreateRoomGroupMutation> {
    return from(this.amplifyService.CreateRoomGroup(filterContent));
  }

  /**
   * ログインしているユーザー情報を取得する
   * @param currentUserId ログインしているユーザーID
   * @returns ユーザー情報
   */
  fetchCurrentUser(currentUserId: string): Observable<GetUserQuery> {
    return from(this.amplifyService.GetUser(currentUserId))
  }

  /**
   * ルームを削除する
   * @param roomId ルームID
   * @returns 削除したルーム情報
   */
  deleteRoomItem(roomId: string): Observable<DeleteRoomMutation> {
    const requestContent = {
      id: roomId
    }
    return from(this.amplifyService.DeleteRoom(requestContent));
  }

  /**
   * ルーム情報を取得する
   * @param filterContent フィルター項目
   * @returns ルーム情報
   */
  fetchRoomGroupsId(filterContent: ModelRoomGroupFilterInput): Observable<ListRoomGroupsQuery> {
    return from(this.amplifyService.ListRoomGroups(filterContent));
  }

  /**
   * ルームグループを削除する
   * @param roomGroupId ルームグループID
   * @returns ルームグループ情報
   */
  deleteRoomGroupsItem(roomGroupId: string): Observable<DeleteRoomGroupMutation> {
    const requestContent = {
      id: roomGroupId
    }
    return from(this.amplifyService.DeleteRoomGroup(requestContent));
  }

  /**
   * 任意のユーザ情報を取得する
   * @param email E-mail
   * @returns 配列でユーザー情報
   */
  fetchUserInfo(email: string): Observable<ListUsersQuery> {
    const filterContent: ModelUserFilterInput = {
      email: {
        eq: `${email}`,
      }
    }
    return from(this.amplifyService.ListUsers(filterContent));
  }

  /**
   * ルームメンバーに作成したときのSubscribe
   * @returns Observable<SubscriptionResponse<OnCreateRoomGroupSubscription>}
   */
  onCreateRoomMemberListener(): any {
    return this.amplifyService.OnCreateRoomGroupListener;
  }

  /**
  * ルームメンバーをアップデートしたときのSubscribe
  * @returns {Observable<SubscriptionResponse<OnUpdateRoomGroupSubscription>>}
  */
  onUpdateRoomMemberListener(): any {
    return this.amplifyService.OnUpdateRoomGroupListener;
  }

  /**
   * ルームメンバーを削除したときのSubscribe
   * @returns {Observable<SubscriptionResponse<OnDeleteRoomGroupSubscription>>}
   */
  onDeleteRoomMemberListener(): any {
    return this.amplifyService.OnDeleteRoomGroupListener;
  }
}
