import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { ListUserInfo } from 'src/app/pages/room-members/models/room-members.model';
import { ListUsersQuery } from 'src/app/shared/service/amplify.service';
import { TaskLogic } from '../../logic/task.logic';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.component.html',
  styleUrls: ['./add-person-modal.component.scss'],
})
export class AddPersonModalComponent implements OnInit {

  arraySelectedPersonId: Array<string>;
  companyMembers: ListUsersQuery;
  members: ListUserInfo[];
  users;
  companyId: string;

  constructor(
    private modalCtrl: ModalController,
    private logic: TaskLogic,
  ) { }

  ngOnInit(): void {
    this.arraySelectedPersonId = [];
  }

  ngAfterViewInit(): void {
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  addPersonToTask(): void {
    this.modalCtrl.dismiss(this.arraySelectedPersonId);
  }

  changeCheckUser(memberId: string): void {
    const indexTargetId = this.arraySelectedPersonId.findIndex(item => item === memberId);
    if (indexTargetId >= 0) {
      this.arraySelectedPersonId.splice(indexTargetId, 1);
    } else {
      this.arraySelectedPersonId.push(memberId);
    }
  }

  searchPerson(ev) {
    this.logic.fetchCompanyMember(this.companyId, ev.detail.value)
      .pipe(map((result) => result.items))
      .subscribe((items) => {
        this.members = items;
      })
  }

}
