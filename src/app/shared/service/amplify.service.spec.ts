import { TestBed } from '@angular/core/testing';

import { AmplifyService } from './amplify.service';

describe('AmplifyService', () => {
  let service: AmplifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmplifyService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
