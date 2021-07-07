import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.page.html',
  styleUrls: ['./member-list.page.scss'],
})
export class MemberListPage implements OnInit {

  constructor(
    private readonly location: Location,
  ) { }

  ngOnInit(): void { }

  /**
   * 前ページに戻ります
   */
  goBackToSetting(): void {
    this.location.back();
  }

  inviteMembers(): void {

  }

}
