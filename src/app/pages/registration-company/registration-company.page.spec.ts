import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrationCompanyPage } from './registration-company.page';

describe('RegistrationCompanyPage', () => {
  let component: RegistrationCompanyPage;
  let fixture: ComponentFixture<RegistrationCompanyPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationCompanyPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
