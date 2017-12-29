  import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

//models and providers
import { Events } from '../../models/events.model';
import { EventsProvider } from '../../providers/events/events.provider';

@IonicPage()
@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {

  event = {} as Events ;

  public eventCreateForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public formBuilder : FormBuilder, public eventProvider: EventsProvider) {
    
    this.eventCreateForm = this.formBuilder.group({
      eventName :['', Validators.compose([Validators.required])],
      date :['', Validators.compose([Validators.required])],
      time :['', Validators.compose([Validators.required])],
      place :['', Validators.compose([Validators.required])],
      address :['', Validators.compose([Validators.required])],
      description :['', Validators.compose([Validators.required])],
      guests :['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventCreatePage');
  }

  createEvent(event : Events) : void{
    this.eventProvider
      .createEvent(event)
      .then(newEvent => {
        this.navCtrl.pop();
      });
  }
}
