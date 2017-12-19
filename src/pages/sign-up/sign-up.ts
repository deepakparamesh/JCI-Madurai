import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, NavParams} from 'ionic-angular';
import { Users } from '../../models/users';

@Component({
  selector : 'page-sign-up',
  templateUrl : 'sign-up.html'
})

export class SignUpPage {
  
  user = {} as Users;

  constructor( private afAuth : AngularFireAuth,
  public navCtrl : NavController, 
  public navParams: NavParams ) {

  }

  signUp(user: Users){   
    
    try{
    const result = this.afAuth.auth.
      createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
     } catch(e) {
       console.log(e);
     }
     
    }

}
