import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { UserProfile } from '../../models/userProfile';
// import { HomePage } from '../home/home';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  
  userProfile = {} as UserProfile; 

  constructor(public navCtrl: NavController,
    public afDatabase : AngularFireDatabase, 
    public afAuth : AngularFireAuth,
    public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  registerProfile( ){
    // console.log(userProfile.userName + userProfile.phoneNumber);
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`profile/${auth.uid}`).set(this.userProfile)
        .then(() => this.navCtrl.push('HomePage'));
    })
  }

}
