import { TestBed } from '@angular/core/testing';

import { HomeLogicService } from './home-logic.logic';

describe('HomeLogicService', () => {
  let service: HomeLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
