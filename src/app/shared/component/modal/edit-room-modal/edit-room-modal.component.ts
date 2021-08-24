import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GetRoomQuery } from '../../../service/amplify.service';

@Component({
  selector: 'app-edit-room-modal',
  templateUrl: './edit-room-modal.component.html',
  styleUrls: ['./edit-room-modal.component.scss'],
})
export class EditRoomModalComponent implements OnInit {

  @Input() room: GetRoomQuery;

  title: string;

  constructor(
    private readonly modalCtrl: ModalController,
  ) { }

  ngOnInit(): void { }

  saveRoom(): void { }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

}
