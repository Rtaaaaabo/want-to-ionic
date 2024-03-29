import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map, toArray, concatMap } from 'rxjs/operators';
import { SessionService } from 'src/app/shared/service/session.service';
import { RoomMemberService } from '../service/room-member.service';
import { InterfaceRoomMembers } from '../interface/room-members.interface';
import { Attribute, RoomGroupItems, RoomGroupUser, CurrentUser, RoomMembers } from '../models/room-members.model';
import { ListRoomGroupsQuery, DeleteRoomMutation, DeleteRoomGroupMutation } from '../../../shared/service/amplify.service';

@Injectable({
  providedIn: 'root'
})
export class RoomMembersLogic {

  constructor(
    private readonly roomMemberService: RoomMemberService,
    private readonly sessionService: SessionService,
  ) { }

  /**
   * 会社のメンバーを返す
   * @param companyId 会社のID
   * @param queryFilterUser ルームメンバーの配列
   * @returns {Observable<ModelUserFilterInput>} 会社に所属しているメンバー
   */
  fetchCompanyMember(companyId: number | string, queryFilterUser?: Array<InterfaceRoomMembers>): Observable<any> {
    const contentObject = {
      companyID: {
        eq: `${companyId}`
      },
    }
    if (queryFilterUser === undefined) {
      return this.roomMemberService.fetchCompanyMember(contentObject);
    } else {
      return of({});
    }
  };

  /**
   * ルームに紐付いているユーザーを取得
   * @param roomId RoomのID
   * @returns {Observable<Array<RoomGroupItems>>} 非同期でルームとユーザー紐付けの配列
   */
  fetchRoomMemberGroup(roomId: string): Observable<Array<RoomGroupItems>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      }
    }
    return this.roomMemberService.fetchRoomMember(filterContent)
      .pipe(map((result) => result.items));
  }

  /**
   * ルームのメンバーを取得
   * @param roomId RoomのID
   * @returns {Observable<ListRoomGroupsQuery>} 非同期でルームのメンバー
   */
  fetchRoomMembers(roomId: string): Observable<ListRoomGroupsQuery> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      },
    }
    return this.roomMemberService.fetchRoomMember(filterContent);
  }

  /**
   * ログインしているユーザー以外のルームメンバーの取得
   * @param roomId RoomのID
   * @param currentUserId ログインしているUserID
   * @returns {Observable<Array<RoomMembers>>} 非同期でルームユーザー
   */
  fetchRoomMembersExceptOwn(roomId: string, currentUserId: string): Observable<Array<RoomMembers>> {
    const filterContent = {
      roomID: {
        eq: `${roomId}`
      },
      userID: {
        ne: `${currentUserId}`
      }
    }
    return this.roomMemberService.fetchRoomMember(filterContent)
      .pipe(map((result) => result.items));
  }

  /**
   * ルームを削除する
   * @param roomId ルームのID
   * @returns {Observable<DeleteRoomMutation>} 非同期でDeleteRoomItemの結果
   */
  deleteRoomItem(roomId: string): Observable<DeleteRoomMutation> {
    return this.roomMemberService.deleteRoomItem(roomId);
  }

  /**
   * 対象のルームから退出する
   * @param roomId ルームのID
   * @param currentUserId ログインしているユーザーのID
   * @returns {Observable<DeleteRoomGroupMutation>} 非同期でルームGroup解除結果
   */
  removeOwnFromRoom(roomId: string, currentUserId: string): Observable<DeleteRoomGroupMutation> {
    return this.fetchRoomGroupsId(roomId, currentUserId)
      .pipe(concatMap((roomGroupId) => this.roomMemberService.deleteRoomGroupsItem(roomGroupId)));
  }

  /**
   * ルームIDとログインしているユーザIDとマッチするグループIDを取得
   * @param roomId ルームのID
   * @param currentUserId ログインしているユーザのID
   * @returns {Observable<string>} 非同期 ルームグループのID
   */
  fetchRoomGroupsId(roomId: string, currentUserId: string): Observable<string> {
    const filterContent = {
      roomID: {
        eq: roomId,
      },
      userID: {
        eq: currentUserId,
      }
    }
    return this.roomMemberService.fetchRoomGroupsId(filterContent)
      .pipe(map(({ items: groups }) => groups[0].id))
  }

  /**
   * 自分以外のメンバーを取得します
   * @param items RoomGroupMember
   * @param currentUserId 自分自身のID
   * @returns 配列でRoomGroupUserを返す
   */
  setRoomMembers(items: Array<RoomGroupItems>, currentUserId: string): Observable<Array<RoomGroupUser>> {
    return from(items)
      .pipe(filter((item) => item.userID !== currentUserId))
      .pipe(map((result) => result.user))
      .pipe(toArray());
  }

  /**
   * ログインしているユーザー情報の取得
   * @returns ユーザー情報
   */
  fetchCurrentUser(): Observable<Attribute> {
    return this.sessionService.fetchCurrentUser()
      .pipe(map(data => data.attributes));
  }

  /**
   * 任意のユーザリストの取得
   * @param email E-mail
   * @returns ユーザー情報の配列
   */
  fetchAnyUserInfoFromList(email: string): Observable<Array<CurrentUser>> {
    return this.roomMemberService.fetchUserInfo(email)
      .pipe(map((result) => result.items));
  }

  /**
   * ルームメンバーに作成したときのSubscribe
   * @returns {Observable<SubscriptionResponse<OnCreateRoomGroupSubscription>}
   */
  onCreateRoomMemberListener(): any {
    return this.roomMemberService.onCreateRoomMemberListener();
  }

  /**
   * ルームメンバーをアップデートしたときのSubscribe
   * @returns {Observable<SubscriptionResponse<OnUpdateRoomGroupSubscription>>}
   */
  onUpdateRoomMemberListener(): any {
    return this.roomMemberService.onUpdateRoomMemberListener();
  }

  /**
   * ルームメンバーを削除したときのSubscribe
   * @returns {Observable<SubscriptionResponse<OnDeleteRoomGroupSubscription>>}
   */
  onDeleteRoomMemberListener(): any {
    return this.roomMemberService.onDeleteRoomMemberListener();
  }

}
