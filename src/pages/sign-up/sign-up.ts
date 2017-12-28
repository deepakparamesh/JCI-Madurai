import { Component } from '@angular/core';
import { NavController, NavParams,
         ToastController, Loading,
         LoadingController} from 'ionic-angular';
import firebase from 'firebase/app';

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Users } from '../../models/users';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { CreateProfilePage } from '../create-profile/create-profile';
//validators
import { CheckboxValidator } from '../../validators/checkbox';
import { EmailValidator } from '../../validators/email-validator';
// import { ConfirmPassword } from '../../validators/confirm-password';

@Component({
  selector : 'page-sign-up',
  templateUrl : 'sign-up.html'
})

export class SignUpPage {

  user = {} as Users;

  submitAttempt: boolean = false;
  signUpForm: FormGroup;
  constructor( private afAuth : AngularFireAuth,
  public navCtrl : NavController, 
  public navParams: NavParams ,
  public toastCtrl : ToastController, 
  public formBuilder: FormBuilder, 
  public loadingCtrl : LoadingController,
  public authProvider : AuthProvider) {

    this.signUpForm = formBuilder.group({
      email : ['', Validators.compose([Validators.required,  EmailValidator.isValid])],
      password: ['',Validators.compose([Validators.minLength(6), Validators.required])],
      conditionsCheck : ['', Validators.compose([Validators.required, CheckboxValidator.isChecked])]
      // confirmPassword : ['', Validators.compose([Validators.required, ConfirmPassword.isEqual])]
    }); 

  }

  async signupUser(user : Users): Promise<void>{

    if(!this.signUpForm.valid){
      this.toastMessager('please fill all the columns properly');
    }else {
      const loading : Loading = this.loadingCtrl.create();
      loading.present();
      try{
        const signupUser: void = await this.authProvider
        .signupUser(user);
        await loading.dismiss();
        // this.navCtrl.setRoot(HomePage);
        this.toastMessager('successfully registered!');
        this.navCtrl.setRoot(CreateProfilePage);
      }catch(error){
        await loading.dismiss();
        this.toastMessager('email already exists');
      }
    } 
    
  }

  // async signUp(user: Users){
  //   this.submitAttempt = true;
  //   try{
  //       if(!this.signUpForm.valid){
  //         this.toastMessager('please fill all the columns');
  //       } 
  //       else {
  //         const result = this.afAuth.auth.
  //         createUserWithEmailAndPassword(user.email, user.password).catch(error =>{
  //             switch(error.code){
  //               case 'auth/email-already-in-use':{
  //                 this.toastMessager('Email already used! try logging in');
  //                 break;
  //               }
  //             }
  //         });
      
  //        this.toastMessager('Successfully registered your account!');
  //       }
  //    } catch(e) {
  //     console.log(e);
  //    }
  // }

  toastMessager(message: string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000  
    }); toast.present();
  }

}
