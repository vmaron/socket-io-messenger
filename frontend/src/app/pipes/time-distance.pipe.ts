import {Pipe, PipeTransform} from '@angular/core';
import formatDistance from 'date-fns/formatDistance';

@Pipe({
  name: 'timeDistance'
})
export class TimeDistancePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    return formatDistance(new Date(value), new Date(), {
      addSuffix: true
    });
  }

}
