import { TestBed } from '@angular/core/testing';

import { HomeLogic } from './home.logic';
import { HomeService } from '../service/home.service';
import { SessionService } from '../../../shared/service/session.service';

describe('HomeLogic', () => {
  let logic: HomeLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService, SessionService]
    });
    logic = TestBed.inject(HomeLogic);
  });

  test('HomeLogicがインスタンス化されていること', () => {
    expect(logic).toBeTruthy();
  });

  test('checkRegistrationUserのテスト', () => {
    const homeService = TestBed.inject(HomeService);
    const mockHomeServiceCheckRegistration = jest.spyOn(homeService, 'checkRegistrationUser').
  })
});
