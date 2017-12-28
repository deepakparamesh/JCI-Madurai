  import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

//models
import { Events } from '../../models/events.model';

/**
 * Generated class for the EventCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {

  event = {} as Events ;

  public eventCreateForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public formBuilder : FormBuilder) {
    
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
    console.log( event );
    
  }
}
