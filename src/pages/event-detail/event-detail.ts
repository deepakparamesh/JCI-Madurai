import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
         Loading, LoadingController } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events.provider'

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  public currentEvent : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public eventProvider: EventsProvider, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    const loading: Loading = this.loadingCtrl.create();
    loading.present();

    this.eventProvider.eventDetails(this.navParams.get('eventId'))
      .on('value', eventSnapShot => {
        this.currentEvent = eventSnapShot.val();
      });
      
    loading.dismiss()
  }

}
