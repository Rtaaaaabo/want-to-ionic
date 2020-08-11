import { Injectable } from '@angular/core';
import { HomePageModule } from '../home.module';
// import { APIService } from '../../../API.service';
import { AmplifyService } from '../../../shared/service/amplify.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private amplifyService: AmplifyService) { }

  createRoom(content): Observable<any> {
    return from(this.amplifyService.CreateRoom(content));
  }
}
