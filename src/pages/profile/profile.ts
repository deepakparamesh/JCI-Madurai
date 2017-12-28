import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { UserProfile } from '../../models/userProfile';
import { AuthProvider} from '../../providers/auth/auth';

import { LoginPage } from '../login/login';
import { ProfileProvider } from '../../providers/profile/profile';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  public userProfile : any;

  // userProfile = {} as UserProfile; 

  constructor(public navCtrl: NavController,
    public afDatabase : AngularFireDatabase, 
    public afAuth : AngularFireAuth,
    public navParams: NavParams,
    public authProvider: AuthProvider, 
    public profileProvider: ProfileProvider) {
  
  }

  logout(): void{
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    })
  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on('value', userProfile=>{
      this.userProfile = userProfile.val();
    })
  }

  

}
