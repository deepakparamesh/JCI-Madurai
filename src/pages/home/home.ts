import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  ImageArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
      this.ImageArray=[
      {'image':'../../assets/imgs/1.jpg'},
      {'image':'../../assets/imgs/2.jpg'}
      ]
    
  }
}
