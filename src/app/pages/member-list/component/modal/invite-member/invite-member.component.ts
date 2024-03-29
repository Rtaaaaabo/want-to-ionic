import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { CreateUserMutation } from 'src/app/shared/service/amplify.service';
import { MemberListLogic } from '../../../logic/member-list.logic';
import { CurrentUser } from '../../../models/member-list.interface';

@Component({
  selector: 'app-invite-member',
  templateUrl: './invite-member.component.html',
  styleUrls: ['./invite-member.component.scss'],
})
export class InviteMemberComponent {
  @Input() currentUserInfo: CurrentUser

  companyMembersForm = new FormGroup({
    companyMembers: new FormArray([
      new FormGroup({
        companyMemberEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      })
    ])
  });

  get companyMemberForm(): FormGroup {
    return new FormGroup({
      companyMemberEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    })
  }

  get companyMemberArray(): FormArray {
    return <FormArray>this.companyMembersForm.get('companyMembers');
  }

  constructor(
    private readonly modalCtrl: ModalController,
    private logic: MemberListLogic,
  ) { }

  dismissModal(result?: Array<CreateUserMutation> | null): Observable<boolean> {
    return from(this.modalCtrl.dismiss(result));
  }

  addCompanyMember(): void {
    this.companyMemberArray.push(this.companyMemberForm);
  }

  removeCompanyMember(index: number): void {
    this.companyMemberArray.removeAt(index);
  }

  registerCompanyMembers(): void {
    this.logic.registerCompanyMembers(this.companyMemberArray.value, this.currentUserInfo)
      .pipe(concatMap((data) => this.dismissModal(data)))
      .subscribe();
  }
}

