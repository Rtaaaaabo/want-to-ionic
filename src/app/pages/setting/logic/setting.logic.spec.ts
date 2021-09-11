import { TestBed } from '@angular/core/testing';
import { SettingLogic } from './setting.logic';

describe('SettingLogic', () => {
  let logic: SettingLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(SettingLogic);
  });

  test('should be created', () => {
    expect(logic).toBeTruthy();
  });
});
