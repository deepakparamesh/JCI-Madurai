import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
        Alert, AlertController,
        Loading, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { UserProfile } from '../../models/userProfile';
import { AuthProvider} from '../../providers/auth/auth';

import { LoginPage } from '../login/login';
import { ProfileProvider } from '../../providers/profile/profile.providers';

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
    public profileProvider: ProfileProvider,
    public alertCtrl : AlertController, 
    public loadingCtrl : LoadingController) {
  
  }

  logout(): void{
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    })
  }

  ionViewDidLoad() {
    const loading: Loading = this.loadingCtrl.create();
    loading.present();

    this.profileProvider.getUserProfile().on('value', userProfile=>{
      this.userProfile = userProfile.val();
    });

    loading.dismiss();
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message : 'Edit Name',
      inputs: [
        {
          name: 'userName',
          placeholder: 'Enter your name',
          value: this.userProfile.userName
        }
      ],
      buttons:[
        {text :'Cancel'},
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updateName(data.userName);
          }
        }
      ]
    });
    alert.present();
  }

  updatePhoneNumber() : void {
    const alert: Alert = this.alertCtrl.create({
      message : 'Edit Phone',
      inputs:[
        {
          name: 'phoneNumber',
          placeholder: 'Enter your phone number',
          value: this.userProfile.phoneNumber
        }
      ],
      buttons: [ 
        { text : 'Cancel'},
        { 
          text: 'Save',
          handler: data => {
            this.profileProvider.updatePhoneNumber(data.phoneNumber);
          }
        }
      ]
    });
    alert.present();
  }

  updateEmail() : void {
    const alert: Alert = this.alertCtrl.create({
      message: 'change Email',
      inputs:[
        {
          name: 'email',
          placeholder: 'Enter your Email',
          value: this.userProfile.email
        },
        {
          name: 'password',
          placeholder: 'Enter Password',
          type: 'password'
        },
      ],
      buttons: [
        { text: 'cancel'},
        { text: 'save',
          handler: data => {
            if( data.email && data.password == null){
              this.displayAlert()
            }else{
              this.profileProvider.updateEmail(data.email, data.password)
            }
            
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword(): void {
    const alert: Alert = this.alertCtrl.create({
      message: 'change Password',
      inputs: [
        {
          name:'oldPassword',
          placeholder: 'Old Password',
          type:'password'
        },
        {
          name: 'newPassword',
          placeholder:'New Password',
          type: 'password'
        }
      ],
      buttons: [
        { text: 'cancel'},
        { text: 'save',
          handler: data => {
            this.profileProvider.updatePassword(data.newPassword, data.oldPassword).then( ()=>{
              console.log("password Changed");
            }).catch(error => {
              console.log(`Error: ${error.message}`);
            });
          }
        }
      ]
    });
    alert.present();
  }

  displayAlert(){
    const invalidMailId = this.alertCtrl.create({
      title:'there should be a title',
      message: "Brand name cannot be empty",
      buttons: [{
        text: "Ok",
        handler:()=>{
          this.updateEmail();
        }
      }]
    })
    invalidMailId.present();
  };
}
