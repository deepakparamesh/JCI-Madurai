import { Component } from '@angular/core';
import { IonicPage, NavController,ActionSheet,
         NavParams, ActionSheetController, 
         Alert, AlertController,
         LoadingController, Loading } from 'ionic-angular';
import { EventsProvider } from  '../../providers/events/events.provider';
import { EventCreatePage } from '../event-create/event-create';
import { EventEditPage } from '../event-edit/event-edit';


@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {

  public eventList: Array<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public eventProvider: EventsProvider, public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    const loading: Loading = this.loadingCtrl.create();
    loading.present();

    this.eventProvider.getEventList().on('value', eventListSnapshot=>{
        this.eventList = [];
        eventListSnapshot.forEach(snap => {
          this.eventList.push({
            id: snap.key,
            eventName: snap.val().eventName,
            eventDate: snap.val().eventDate,
            eventTime: snap.val().eventTime,
            eventPlace: snap.val().eventPlace,
            });
          return false;
        });
        loading.dismiss();
    });
  }
  
  goToCreateEvent(){
    this.navCtrl.push(EventCreatePage);
  }

  showOptions(eventId):void{
    let options: ActionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
           text: 'Edit Event',
           handler: ()=>{
           this.navCtrl.push(EventEditPage,{'eventId' : eventId}) 
           } 
        },
        {
          text: 'Delete Event',
          handler: ()=> {
            let alert: Alert = this.alertCtrl.create({
              message: 'Delete this Event?',
              buttons:[
                {
                  text: 'Cancel',
                  role:'cancel'
                },
                {
                  text: 'Delete',
                  handler: ()=>{
                    this.eventProvider.deleteEvent(eventId)
                    .then(()=>{ this.navCtrl.setRoot(EventListPage)
                    });
                  }
                }
              ]
            });
            alert.present();
          }
        },
        {
          text: 'Event Details',
          handler: ()=>{ console.log('details of the events are here');
          }
        }
      ]
    });
    options.present();
  }

}
