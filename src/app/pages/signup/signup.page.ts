import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SignupLogic } from './logic/signup.logic';
import { InterfaceSignup } from '../../interfaces/signup.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordform: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPasswordform: new FormControl('', [Validators.required, Validators.minLength(8)])
  }, this.checkPasswords);

  companyId: string;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private logic: SignupLogic
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.signUpForm.patchValue({ email: params.email });
      // console.log(params);
    })
  }

  checkPasswords(group: FormGroup): null | { notSame: boolean } {
    let password = group.get('passwordform').value;
    let confirmPassword = group.get('confirmPasswordform').value;
    return password = confirmPassword ? null : { notSame: true }
  }

  onSubmit(): void {
    const value: InterfaceSignup = this.signUpForm.value;
    this.logic.entrySignupUser(value)
      .subscribe(() => {
        this.router.navigate(['/confirm'], { state: { data: { email: value.email } } });
      })
    if (this.signUpForm.invalid) {
      return;
    }
  }

  goBackToLogin(): void {
    this.location.back();
  }

}
