import { TestBed } from '@angular/core/testing';

import { SettingLogic } from './setting.logic';

describe('SettingLogicService', () => {
  let service: SettingLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
