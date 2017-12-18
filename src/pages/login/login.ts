import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {SignUpPage} from '../sign-up/sign-up';

@Component({
  selector : 'page-login',
  templateUrl : 'login.html'
})

export class LoginPage {
  constructor(public navCtrl: NavController) {
    
  }

  registerPage(){
    this.navCtrl.push(SignUpPage);
  }
}
