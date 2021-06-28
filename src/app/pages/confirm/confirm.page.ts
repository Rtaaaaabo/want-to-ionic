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
  confirmTargetEmail: string;
  confirmForm = new FormGroup({
    confirmNumber: new FormControl('', [Validators.required])
  });

  constructor(
    private readonly router: Router,
    private logic: ConfirmLogic,
  ) {
  }

  ngOnInit() {
    this.confirmTargetEmail = this.router.getCurrentNavigation().extras.state.data.email;
    console.log('[confirmTargetEmail]', this.confirmTargetEmail);
  }

  get aliasConfirmNumber(): FormControl {
    return <FormControl>this.confirmForm.get('confirmNumber');
  }

  confirmSignUp() {
    this.logic.sendConfirmUser(this.confirmTargetEmail, this.aliasConfirmNumber.value)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

  reSendSignUp() {
    console.log('ReSendSignUp');
  }

}
