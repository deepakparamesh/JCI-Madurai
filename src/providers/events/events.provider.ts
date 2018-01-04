import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Events } from '../../models/events.model';
import { updateDate } from 'ionic-angular/util/datetime-util';

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

    createEvent(event : Events) : firebase.database.ThenableReference{
        return this.eventListRef.push({
            eventName: event.eventName,
            eventDate : event.eventDate,
            eventTime: event.eventTime,
            eventPlace : event.eventPlace,
            eventAddress : event.eventAddress,
            description: event.description,
            guests : event.guests
        })
    }

    deleteEvent(eventId: string): Promise<any>{
        return this.eventListRef.child(eventId).remove();
    }

    // eventDetails(eventId: string): firebase.database.Reference{
    //     return this.eventListRef.child(eventId);
    // }

    eventDetails(eventId:string):firebase.database.Reference{
        return this.eventListRef.child(eventId);
    }

    updateName(eventId:string, eventName: string): Promise<any>{
        return this.eventListRef.child(eventId).update({ eventName: eventName });
    }

    updatePlace(eventId: string, eventPlace: string) : Promise<any>{
        return this.eventListRef.child(eventId).update({ eventPlace: eventPlace});
    }

    updateAddress( eventId: string, eventAddress: string) : Promise<any>{
        return this.eventListRef.child(eventId).update({ eventAddress: eventAddress});
    }

    updateDescription( eventId: string, eventDescription: string ) : Promise<any>{
        return this.eventListRef.child(eventId).update({ description : eventDescription});
    }
    
    updateGuests( eventId: string, eventGuests: string) : Promise<any>{
        return this.eventListRef.child(eventId).update({ guests: eventGuests});
    }

    updateDate(eventId:string, eventDate: string): Promise<any>{
        return this.eventListRef.child(eventId).update({ eventDate: eventDate });
    }

    updateTime(eventId: string, updatedTime: string): Promise<any>{
        return this.eventListRef.child(eventId).update({ eventTime : updatedTime});
    }
}