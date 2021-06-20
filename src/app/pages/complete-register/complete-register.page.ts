import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.page.html',
  styleUrls: ['./complete-register.page.scss'],
})
export class CompleteRegisterPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params: any) => params.status))
      .subscribe((param) => console.log('param', param));
  }

}
