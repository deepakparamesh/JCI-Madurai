import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventEditPage } from './event-edit';

@NgModule({
  declarations: [
    EventEditPage,
  ],
  imports: [
    IonicPageModule.forChild(EventEditPage),
  ],
})
export class EventEditPageModule {}
