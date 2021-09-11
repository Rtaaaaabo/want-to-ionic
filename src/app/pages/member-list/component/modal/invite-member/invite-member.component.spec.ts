import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InviteMemberComponent } from './invite-member.component';

describe('InviteMemberComponent', () => {
  let component: InviteMemberComponent;
  let fixture: ComponentFixture<InviteMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InviteMemberComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InviteMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
