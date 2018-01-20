import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Users } from '../../models/users'
@Injectable()
export class AuthProvider{
    constructor(){

    }

    user = {} as Users;

    signupUser(user : Users) : Promise<void>{
        return firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(newUser => {
            firebase
                .database()
                .ref(`/userProfile/${newUser.uid}/email`)
                .set(user.email);
        })
        .catch(error =>{
            console.error(error);
            throw new Error(error);   
        });
    }

    loginUser( user: Users) : Promise<firebase.User>{
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    }


    logoutUser(): Promise<void>{
        const userId: string = firebase.auth().currentUser.uid;

        firebase.database()
        .ref(`/userProfile/${userId}`)
        .off();
        return firebase.auth().signOut();
    }

}