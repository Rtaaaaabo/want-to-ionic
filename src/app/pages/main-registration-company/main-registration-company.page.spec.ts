import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainRegistrationCompanyPage } from './main-registration-company.page';

describe('MainRegistrationCompanyPage', () => {
  let component: MainRegistrationCompanyPage;
  let fixture: ComponentFixture<MainRegistrationCompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRegistrationCompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainRegistrationCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
