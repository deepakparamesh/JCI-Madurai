import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
         ToastController, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';  
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//models
import { UserProfile } from '../../models/userProfile';

//providers
import { ProfileProvider } from '../../providers/profile/profile';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {

  userProfile = {} as UserProfile;
  submitAttempt: boolean = false;
  createProfileForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl : ToastController,
              public formBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              public profileProvider : ProfileProvider,
              public afAuth : AngularFireAuth,
              public afDatabase: AngularFireDatabase
              ) {
        
      this.createProfileForm = formBuilder.group({
        userName : ['', Validators.compose([Validators.required])],
        phoneNumber: ['', Validators.compose([Validators.required])]
      });
  }

  ionViewDidLoad() {
    
  }

  // createProfile(profile : UserProfile) : void{
  //   this.profileProvider
  //   .createProfile( profile )
  //   .then(() => this.navCtrl.setRoot(TabsPage));
  // }

  createProfile( profile : UserProfile) {
    console.log(profile.userName + profile.phoneNumber);
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`userProfile/${auth.uid}/profile`).set(this.userProfile)
        .then(() => this.navCtrl.setRoot(TabsPage));
    });
  }
}
