import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { TaskLogic } from '../../logic/task.logic';
import { MemberTask } from '../../model/task-member.model';
import { User } from 'src/app/shared/service/amplify.service';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.component.html',
  styleUrls: ['./add-person-modal.component.scss'],
})
export class AddPersonModalComponent implements OnInit {

  arraySelectedPersonId: Array<string>;
  members: Array<MemberTask>;
  companyId: string;
  roomId: string;
  companyMembers;
  notAssignMembers;
  users;

  constructor(
    private readonly logic: TaskLogic,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
    this.arraySelectedPersonId = [];
    this.members = this.notAssignMembers.map((member) => {
      member.checked = false
      return member;
    });
  }

  dismissModal(): void {
    this.modalCtrl.dismiss({ result: 'dismiss' });
  }

  addPersonToTask(): void {
    this.logic.addMembersToAnyRoom(this.arraySelectedPersonId, this.roomId)
      .subscribe(() => {
        this.modalCtrl.dismiss({ result: 'success' });
      })
  }

  changeCheckUser(member: MemberTask): void {
    const indexTargetId = this.arraySelectedPersonId.findIndex(item => item === member.id);
    const targetIndex = this.members.findIndex(item => item.id === member.id);
    if (indexTargetId >= 0) {
      this.arraySelectedPersonId.splice(indexTargetId, 1);
      this.members[targetIndex].checked = false;
    } else {
      this.arraySelectedPersonId.push(member.id);
      this.members[targetIndex].checked = true;
    }
  }

  inputSearch(ev: CustomEvent): void {
    if (ev.detail.value !== null) {
      this.logic.fetchCompanyMember(this.companyId, ev.detail.value)
        .pipe(map((result) => result.items))
        .subscribe((items) => {
          this.members = this.checkNotAssignMember(this.notAssignMembers, items)
        })
    } else {
      this.logic.fetchCompanyMember(this.companyId)
        .pipe(map((result) => result.items))
        .subscribe(() => {
          this.members = this.notAssignMembers;
        })
    }
  }

  checkNotAssignMember(companyMembers, roomMembers): Array<any> {
    return companyMembers.filter((companyMember) => {
      return roomMembers.some((roomMember) => {
        return companyMember.id === roomMember.id;
      })
    });
  }

  cancelSearch(ev): void { }

  clearSearch(ev): void { }

}
