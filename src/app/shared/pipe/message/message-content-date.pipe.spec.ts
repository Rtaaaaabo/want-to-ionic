import { MessageContentDatePipe } from './message-content-date.pipe';
import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

describe('MessageContentDatePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePipe]
    });

  });
  it('DatePipeがインスタンス化されていること', () => {
    const datePipe: DatePipe = TestBed.inject(DatePipe);
    const pipe = new MessageContentDatePipe(datePipe);
    expect(pipe).toBeTruthy();
  })

});
