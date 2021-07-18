import { TestBed } from '@angular/core/testing';

import { DataLogic } from './data.logic';

describe('DataService', () => {
  let logic: DataLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logic = TestBed.inject(DataLogic);
  });

  it('should be created', () => {
    expect(logic).toBeTruthy();
  });
});
