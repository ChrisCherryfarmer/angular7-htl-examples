import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { Guest } from './guest.model';

@Pipe({
  name: 'attendingFilter',
  pure: false
})
@Injectable()
export class GuestAttendingFilterPipe implements PipeTransform {
  transform(guests: Array<Guest>): any {
    if (!guests) {
          return guests;
      }

    return guests.filter((guest: Guest) => {
      return guest.attending;
    });
  }
}
