import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListRoomComponent } from './list-room.component';

describe('ListRoomComponent', () => {
  let fixture: ComponentFixture<ListRoomComponent>;
  let component: ListRoomComponent;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ListRoomComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
