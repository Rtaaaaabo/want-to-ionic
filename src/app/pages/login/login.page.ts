import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginLogicService } from './logic/login-logic.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(
    private logic: LoginLogicService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.logic.sendLoginInfo(email, password).subscribe(() => {
      this.router.navigate(['']);
    })
  }

}
