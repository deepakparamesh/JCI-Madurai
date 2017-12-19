import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

import {SignUpPage} from '../sign-up/sign-up';
import { Users } from '../../models/users'
import { HomePage } from '../home/home'


@Component({
  selector : 'page-login',
  templateUrl : 'login.html'
})

export class LoginPage {
  
   user = {} as Users;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth : AngularFireAuth) {
  }


  async login(user :  Users){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
      this.navCtrl.setRoot(HomePage);
      }
    }
  
    catch(e){
      console.error(e);
    }
  }

  registerPage(){
    this.navCtrl.push(SignUpPage);
  }
}
