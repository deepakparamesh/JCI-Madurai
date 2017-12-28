import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class EventsProvider{
    public eventListRef: firebase.database.Reference;

    constructor(){
        this.eventListRef = firebase
        .database()
        .ref(`/events`)
    }

    getEventList(): firebase.database.Reference{
        return this.eventListRef;
    }
}