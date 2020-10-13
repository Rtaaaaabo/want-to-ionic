import { TestBed } from '@angular/core/testing';

import { AddPersonLogic } from './add-person.logic';

describe('AddPersonService', () => {
  let service: AddPersonLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPersonLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
