import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeServiceService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
