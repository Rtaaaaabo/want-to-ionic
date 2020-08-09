import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signpForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordform: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPasswordform: new FormControl('', [Validators.required, Validators.minLength(8)])
  }, this.checkPasswords);

  constructor() { }

  ngOnInit() {
  }

  checkPasswords(group: FormGroup) {
    let password = group.get('passwordform').value;
    let confirmPassword = group.get('confirmPasswordform').value;
    return password = confirmPassword ? null : { notSame: true }
  }

}
