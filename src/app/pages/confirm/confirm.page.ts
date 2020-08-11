import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})

export class ConfirmPage implements OnInit {
  confirmForm = new FormGroup({
    confirmNumber: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  confirmSignup() {
    console.log('ConfirmSignup');
  }

  reSendSignup() {
    console.log('reSendSignup');
  }

}
