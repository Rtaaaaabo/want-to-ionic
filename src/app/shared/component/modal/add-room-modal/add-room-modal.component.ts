import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetRoomQuery } from 'src/app/shared/service/amplify.service';

@Component({
  selector: 'app-add-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.scss'],
})
export class AddRoomModalComponent implements OnInit {

  @Input() room: GetRoomQuery | undefined;

  role = 'create';

  roomItemGroup = new FormGroup({
    nameItem: new FormControl('', [Validators.required]),
    descriptionItem: new FormControl(''),
  });

  constructor(
    private modalCtrl: ModalController,
  ) { }

  get nameItem(): FormControl {
    return <FormControl>this.roomItemGroup.get('nameItem');
  }

  get descriptionItem(): FormControl {
    return <FormControl>this.roomItemGroup.get('descriptionItem');
  }

  ngOnInit(): void {
    if (this.room !== undefined) {
      this.roomItemGroup.setValue({
        nameItem: this.room.name,
        descriptionItem: this.room.description,
      });
      this.role = 'update';
    }
  }

  dismissModal(): void {
    this.modalCtrl.dismiss();
  }

  createItem(): void {
    this.modalCtrl.dismiss(this.roomItemGroup.value, this.role);
  }

}
