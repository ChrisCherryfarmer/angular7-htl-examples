import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GuestListService {

  constructor(private http: HttpClient) {
  }

  loadGuests() {
    return this.http.get('/api/maturaball/guest-list');
  }

}
