import { Component, OnInit } from '@angular/core';
import { GuestListService } from './guest-list.service';
import { Guest } from './guest.model';

@Component({
  selector: 'htl-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  guests: Array<Guest>;
  genders = ['male', 'female'];

  constructor(private _guestListService: GuestListService) {
  }

  ngOnInit() {
    this._guestListService.loadGuests().subscribe((guestsFromBackend: any) => {
      this.guests = guestsFromBackend.guestList;
      console.log('Gäste');
      console.log(this.guests);
    });
  }


  toggleGuest(guest: Guest) {
    guest.attending = !guest.attending;
  }


  addDummyGuest() {
    const dummyGuest = new Guest('Mustermann', 'Max', 19, 'male', false);
    this.guests.push(dummyGuest);
  }

  deleteGuest(guest: Guest) {
    console.log(this.guests.indexOf(guest));
    this.guests.splice(this.guests.indexOf(guest), 1);
  }

}
