import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmLogic } from './logic/confirm.logic';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})

export class ConfirmPage implements OnInit {
  companyId: string;
  confirmTargetEmail: string;
  userId: string;
  confirmForm = new FormGroup({
    confirmNumber: new FormControl('', [Validators.required])
  });

  constructor(
    private readonly router: Router,
    private logic: ConfirmLogic,
  ) {
  }

  /**
   * 確認コードのFormControlのGetterです
   */
  get aliasConfirmNumber(): FormControl {
    return <FormControl>this.confirmForm.get('confirmNumber');
  }

  /**
   * 初期読み込み時
   * 確認するEmailとCompanyIdを取得します
   */
  ngOnInit(): void {
    this.confirmTargetEmail = this.router.getCurrentNavigation().extras.state.data.email;
    this.companyId = this.router.getCurrentNavigation().extras.state.data.companyId;
    this.userId = this.router.getCurrentNavigation().extras.state.data.userId;
    console.log('userId', this.userId);
  }

  /**
   * 確認コードが正しいユーザーであるかLogicに記載します
   */
  confirmSignUp(): void {
    this.logic.sendConfirmUser(this.confirmTargetEmail, this.aliasConfirmNumber.value)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

  /**
   * 確認コードを再送信する処理です
   */
  reSendSignUp(): void {
    console.log('ReSendSignUp');
  }

}
