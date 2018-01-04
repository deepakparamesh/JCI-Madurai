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
                this.currentUser = user;
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

    updateName( userName : string ) : Promise<any>{
        return this.userProfileRef.update({ userName });
    }

    updatePhoneNumber ( phoneNumber : number ) : Promise<any>{
        return this.userProfileRef.update({ phoneNumber });
    }

    // updateEmail( email : string ) : Promise<any>{
    //     return this.userProfileRef.update({ email });
    // }

    updateEmail(newEmail: string, password: string): Promise<any>{
        const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser.email, password);
        return this.currentUser.reauthenticateWithCredential(credential).then(user =>{
            this.currentUser.updateEmail(newEmail).then(user => {
                this.userProfileRef.update({ email: newEmail});
            });
        }).catch(error => {
            console.error(error);
        });
    }

    updatePassword(newPassword: string, oldPassword: string): Promise<any> {
        const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser.email, oldPassword);
        return this.currentUser.reauthenticateWithCredential(credential).then( user => {
            this.currentUser.updatePassword(newPassword).then(user =>{
                console.log("password changed");
            });
        }).catch(error => {
            console.error(error)
        });
    }
}

