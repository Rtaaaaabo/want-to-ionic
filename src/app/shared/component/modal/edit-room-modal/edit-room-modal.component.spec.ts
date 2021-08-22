import {
  ComponentFixture, TestBed
} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditRoomModalComponent } from './edit-room-modal.component';

describe('EditRoomModalComponent', () => {
  let component: EditRoomModalComponent;
  let fixture: ComponentFixture<EditRoomModalComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [EditRoomModalComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditRoomModalComponent);
    fixture.detectChanges();
  }));
});
