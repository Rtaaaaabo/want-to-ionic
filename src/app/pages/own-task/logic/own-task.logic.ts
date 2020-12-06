import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnTaskLogic {

  constructor() { }

  fetchRoomGroup(): Observable<any> {
    return of({})
  }
}
