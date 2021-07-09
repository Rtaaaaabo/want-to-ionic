import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { of, Observable } from 'rxjs';
import { MemberListLogic } from '../../../logic/member-list.logic';

@Component({
  selector: 'app-invite-member',
  templateUrl: './invite-member.component.html',
  styleUrls: ['./invite-member.component.scss'],
})
export class InviteMemberComponent implements OnInit {

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

  ngOnInit(): void { }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  addCompanyMember(): void {
    this.companyMemberArray.push(this.companyMemberForm);
  }

  removeCompanyMember(index: number): void {
    this.companyMemberArray.removeAt(index);
  }

  registerCompanyMembers(): void {
    this.logic.registerCompanyMembers(this.companyMemberArray.value)
      .subscribe((data) => console.log(data));
  }
}

