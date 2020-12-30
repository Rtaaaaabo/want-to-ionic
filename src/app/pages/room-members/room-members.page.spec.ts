import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomMembersPage } from './room-members.page';

describe('RoomMembersPage', () => {
  let component: RoomMembersPage;
  let fixture: ComponentFixture<RoomMembersPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [RoomMembersPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
