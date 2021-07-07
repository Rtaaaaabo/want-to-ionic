import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

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
    private modalCtrl: ModalController,
  ) { }

  ngOnInit(): void { }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  addCompanyMember(): void {
    this.companyMemberArray.push(this.companyMemberForm);
  }
}
