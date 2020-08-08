import { Injectable } from '@angular/core';
import { APIService } from '../../../API.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private amplifyService: APIService) { }

  createRoom(content): Observable<any> {
    return from(this.amplifyService.CreateRoom(content)).pipe();
  }
}
