import { TestBed } from '@angular/core/testing';

import { SettingService } from './setting.service';

describe('SettingServiceService', () => {
  let service: SettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
