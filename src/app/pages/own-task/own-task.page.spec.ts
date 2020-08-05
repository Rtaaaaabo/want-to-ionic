import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnTaskPage } from './own-task.page';

describe('OwnTaskPage', () => {
  let component: OwnTaskPage;
  let fixture: ComponentFixture<OwnTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
