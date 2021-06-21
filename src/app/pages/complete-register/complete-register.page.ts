import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const titleContent = {
  progress: {
    title: '仮登録完了',
    content: `登録して頂いたメールアドレスに本登録用のリンクを送信しました。
      会社情報の本登録をお願いいたします。`,
    button: 'OK',
  },
  done: {
    title: '本登録完了',
    content: `会社情報の本登録が完了しました。\n
    下記のリンクから、ログインしていただき利用を初めてください。
    これから御社内でイノベーションを作り上げていくことを望んでおります。
    `,
    button: '完了',
  },
}

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.page.html',
  styleUrls: ['./complete-register.page.scss'],
})
export class CompleteRegisterPage implements OnInit {

  statusRegister: string;
  viewContent: { title: string, content: string, button: string };

  constructor(
    private readonly router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.status))
      .subscribe((param) => {
        this.statusRegister = param.status;
        this.viewContent = titleContent[param.status];
      });
  }

  navigateTo(): void {
    this.router.navigate(['/login']);
  }

}
