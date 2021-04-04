import { TestBed } from '@angular/core/testing';

import { HomeLogic } from './home.logic';

describe('HomeLogic', () => {
  let service: HomeLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
