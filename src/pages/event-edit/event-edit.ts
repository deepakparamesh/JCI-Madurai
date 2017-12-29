import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
        Alert, AlertController } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events.provider';
/**
 * Generated class for the EventEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-edit',
  templateUrl: 'event-edit.html',
})
export class EventEditPage {
  public currentEvent: any;
  public date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public eventsProvider: EventsProvider) {
  }

  ionViewDidLoad() {
    this.eventsProvider.eventDetails(this.navParams.get('eventId'))
      .on('value', eventSnapshot =>{
        this.currentEvent = eventSnapshot.val();
        this.date = eventSnapshot.val().date;
      });
  }

  updateName():void{
    const alert:Alert = this.alertCtrl.create({
      message: 'Edit name',
      inputs: [
        {
          name: 'eventName',
          placeholder: 'Enter name',
          value: this.currentEvent.eventName
        },
      ],
      buttons: [
        { text: 'Cancel'},
        {
          text: 'Save',
          handler: data => {
            this.eventsProvider.updateName( this.navParams.get('eventId'), data.eventName);
          }
        }
      ]
    });
    alert.present();
  }

  updatePlace():void{
    const alert:Alert = this.alertCtrl.create({
      message: 'Edit Place',
      inputs: [
        {
          name: 'eventPlace',
          placeholder: 'Enter place',
          value: this.currentEvent.eventPlace
        },
      ],
      buttons: [
        { text: 'Cancel'},
        {
          text: 'Save',
          handler: data => {
            this.eventsProvider.updatePlace( this.navParams.get('eventId'), data.eventPlace);
          }
        }
      ]
    });
    alert.present();
  }

  updateAddress():void{
    const alert:Alert = this.alertCtrl.create({
      message: 'Edit Address',
      inputs: [
        {
          name: 'eventAddress',
          placeholder: 'Enter Address',
          value: this.currentEvent.eventAddress
        },
      ],
      buttons: [
        { text: 'Cancel'},
        {
          text: 'Save',
          handler: data => {
            this.eventsProvider.updateAddress( this.navParams.get('eventId'), data.eventAddress);
          }
        }
      ]
    });
    alert.present();
  }

  updateDescription():void{
    const alert:Alert = this.alertCtrl.create({
      message: 'Edit Address',
      inputs: [
        {
          name: 'description',
          placeholder: 'Edit Description',
          value: this.currentEvent.description
        },
      ],
      buttons: [
        { text: 'Cancel'},
        {
          text: 'Save',
          handler: data => {
            this.eventsProvider.updateDescription( this.navParams.get('eventId'), data.description);
          }
        }
      ]
    });
    alert.present();
  }

  updateGuests():void{
    const alert:Alert = this.alertCtrl.create({
      message: 'Edit Guests',
      inputs: [
        {
          name: 'guests',
          placeholder: 'Edit Guests',
          value: this.currentEvent.guests
        },
      ],
      buttons: [
        { text: 'Cancel'},
        {
          text: 'Save',
          handler: data => {
            this.eventsProvider.updateGuests( this.navParams.get('eventId'), data.guests);
          }
        }
      ]
    });
    alert.present();
  }
}
