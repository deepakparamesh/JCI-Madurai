import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { UserProfile } from '../../models/userProfile';
import { AngularFireAction } from 'angularfire2/database/interfaces';

@Injectable()
export class ProfileProvider {
    userProfileRef: firebase.database.Reference;
    currentUser: firebase.User;
    
    userProfile = {} as UserProfile;

    constructor( public afDatabase: AngularFireDatabase,
                 public afAuth: AngularFireAuth ){
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.userProfileRef = firebase
                                    .database()
                                    .ref(`/userProfile/${user.uid}`);
            }
        });
    }

    getUserProfile(): firebase.database.Reference{
        return this.userProfileRef;
    }

    // createProfile( profile : UserProfile ) : firebase.database.ThenableReference{
    //     return this.userProfileRef.push({
    //         userName : profile.userName,
    //         phoneNumber : profile.phoneNumber
    //     });
    // }

    // createProfile( profile : UserProfile) {
    //     console.log(profile.userName + profile.phoneNumber);
    //     this.afAuth.authState.take(1).subscribe(auth =>{
    //       this.afDatabase.object(`profile/${auth.uid}`).set(this.userProfile)
    //         .then(() => this.navCtrl.push('HomePage'));
    //     })
    //   }


}

