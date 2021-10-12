import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'messageContentDate'
})
export class MessageContentDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value: string, ...args: unknown[]): string {
    const chatMessageText = value;
    let reDate = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{1,3}\+\d{2}:\d{2}/;
    let responseString = value;
    let regexDate: string;
    const matchDateStamp = chatMessageText.match(reDate);
    if (matchDateStamp) {
      regexDate = matchDateStamp[0];
      this.datePipe.transform(regexDate, "yyyy/MM/dd");
      responseString = responseString.replace(regexDate, this.datePipe.transform(regexDate, "yyyy年MM月dd日"));
    }
    return responseString;
  }

}
