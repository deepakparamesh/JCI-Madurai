import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Users } from '../../models/users'

@Injectable()
export class AuthProvider{
    constructor(){

    }

    user = {} as Users;

    async signupUser(user : Users): Promise<firebase.User>{
        try {
        const newUser : firebase.User = await  firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

        // await firebase
        // .database()
        // .ref(`/userProfile/${newUser.uid}/email`)
        // .set(user.email);
        return newUser;
        
        } catch(error){
        throw error;
          }

    }

    loginUser( user: Users) : Promise<firebase.User>{
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    }
}