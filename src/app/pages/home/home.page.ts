import { Component, OnInit } from '@angular/core';
import { filter, flatMap } from 'rxjs/operators';
import { HomeLogicService } from './logic/home-logic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private logic: HomeLogicService) { }

  ngOnInit() {
    this.logic.fetchCurrentUser().subscribe((data) => console.log(data));
    // .pipe(flatMap((data) => this.logic.checkRegistrationUser(data)))
    // .pipe(filter(({items}) => items.length === 0))
    // .pipe(flatMap(() => this.logic.))
    // .subscribe(({ items }) => console.log(items));
  }

}
