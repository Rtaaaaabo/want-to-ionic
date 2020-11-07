import { Component, Input, OnInit } from '@angular/core';

const viewKind = [
  { value: 'room', name: 'ルーム' },
  { value: 'task', name: 'タスク' },
];

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss'],
})
export class NoContentComponent implements OnInit {

  @Input() pageKind: string;
  viewValue: { value: string, name: string };

  constructor() { }

  ngOnInit() {
    this.viewValue = viewKind.find(item => item.value === this.pageKind);
  }

}
