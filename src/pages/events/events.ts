import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsProvider } from  '../../providers/events/events';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  public eventList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public eventProvider: EventsProvider) {
    
  }

  ionViewDidLoad() {
    this.eventProvider.getEventList().on('value', eventListSnapshot=>{
        this.eventList = [];
        eventListSnapshot.forEach(snap => {
          this.eventList.push({
            id: snap.key,
            name: snap.val().name,
            price: snap.val().price,
            date: snap.val().data
          });
          return false;
        });
    });
  }

}
