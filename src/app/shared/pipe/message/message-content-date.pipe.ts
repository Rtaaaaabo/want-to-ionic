import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageContentDate'
})
export class MessageContentDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
