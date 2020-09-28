import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomePage } from './home.page';
import { ListRoomComponent } from './componet/list-room/list-room.component';
import { HomeService } from './service/home-service.service';
import { HomeLogicService } from './logic/home-logic.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  entryComponents: [

  ],
  declarations: [HomePage, ListRoomComponent],
  providers: [HomeService, HomeLogicService]
})
export class HomePageModule { }
