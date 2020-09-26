import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { HomeLogicService } from './logic/home-logic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private logic: HomeLogicService) { }

  ngOnInit() {
    this.logic.fetchCurrentUser()
      .pipe(flatMap((email) => this.logic.checkRegistrationUser(email)))
      .subscribe(({ items }) => console.log(items));
  }

}
