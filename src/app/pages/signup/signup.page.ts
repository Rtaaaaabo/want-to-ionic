import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SignupLogicService } from './logic/signup-logic.service';
import { InterfaceSignup } from '../../interfaces/signup.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordform: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPasswordform: new FormControl('', [Validators.required, Validators.minLength(8)])
  }, this.checkPasswords);

  constructor(
    private router: Router,
    private location: Location,
    private logic: SignupLogicService
  ) { }

  ngOnInit() {
  }

  checkPasswords(group: FormGroup) {
    let password = group.get('passwordform').value;
    let confirmPassword = group.get('confirmPasswordform').value;
    return password = confirmPassword ? null : { notSame: true }
  }

  onSubmit() {
    const value: InterfaceSignup = this.signupForm.value;
    this.logic.entrySignupUser(value).subscribe(() => {
      this.router.navigate(['/confirm'], { state: { data: { email: value.email } } });
    })
    if (this.signupForm.invalid) {
      return;
    }
  }

  goBackToLogin() {
    this.location.back();
  }

}
