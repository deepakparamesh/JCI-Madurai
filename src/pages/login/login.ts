import { Component } from '@angular/core';
import { NavController, NavParams,
         Loading, LoadingController,} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailValidator } from '../../validators/email-validator';
import { AuthProvider } from '../../providers/auth/auth';
import { SignUpPage } from '../sign-up/sign-up';
import { Users } from '../../models/users';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import firebase from 'firebase/app';
import { ProfilePage } from '../profile/profile';

@Component({
  selector : 'page-login',
  templateUrl : 'login.html'
})

export class LoginPage {
  
   submitAttempt: boolean = false;

   user = {} as Users;
   loginForm : FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth : AngularFireAuth,
              public toastCtrl : ToastController,
              public formBuilder: FormBuilder,
              public loadingCtrl : LoadingController,
              public authProvider : AuthProvider) {
      this.loginForm = formBuilder.group({
        email : ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])] 
      });
  }

  async loginUser(user :  Users): Promise<void> {
    this.submitAttempt = true;
    
    

      if(!this.loginForm.valid){
        this.toastMessager('please fillup all columns');
      } else {
        const loading: Loading = this.loadingCtrl.create();
        loading.present();

        try{
          const loginUser: firebase.User = await this.authProvider.loginUser(
            user
          );
          await loading.dismiss();
          this.toastMessager('welcome to JCI Madurai Temple city!')
          this.navCtrl.setRoot(TabsPage);
        } catch(error){

          await loading.dismiss();
          switch(error.code){
            case 'auth/user-not-found' : {
              this.toastMessager('Email not found! register your mail')
              break;
            }
            case'auth/wrong-password' : {
              this.toastMessager('Wrong password');
              break;
            }
          }
        
        }
      }

        // const result = this.afAuth.auth.
        // signInWithEmailAndPassword(user.email, user.password);

        // if(result.catch(error => { 
        //   switch(error.code){
        //     case 'auth/user-not-found' : {
        //       this.toastMessager('Email not found');
        //       break;
        //     }
        //     case 'auth/wrong-password': {
        //       this.toastMessager('wrong password');
        //       break;
        //     }
        //   }
        // })){
        //   console.log("the login case");
        // }else {
        //   this.toastMessager('welcome to JCI Madurai city application');
        // }

        // .catch(error => {
        //   if(error){
        //     switch(error.code){
        //       case 'auth/user-not-found' : {
        //         this.toastMessager('Email not found');
        //         break;
        //       }
        //       case 'auth/wrong-password' : {
        //         this.toastMessager('wrong password');
        //         break;
        //       }
        //     }
        //   } 
        //   // else {
        //   //   this.toastMessager('welcome to JCI Madurai city application');
        //   // } 
        // });
        
        
        // this.navCtrl.setRoot(HomePage); 
        // this.toastMessager('welcome to JCI Madurai city application');
       
  }

  registerPage(){
    this.navCtrl.push(SignUpPage);
  }

  toastMessager(s: string){
    let toast = this.toastCtrl.create({
      message: s,
      duration: 3000  
    }); toast.present();
  }
}
