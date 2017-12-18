import { Component } from '@angular/core';
// import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector : 'page-my-lom',
  templateUrl : 'my-lom.html'
})

export class MyLomPage {

// songs : AngularFireList<any>;

  constructor(public navCtrl: NavController) {
    // this.songs = afDatabase.list('/songs').valueChanges();
  }

  // addSong(){
  //   let prompt = this.alertCtrl.create({
  //     title : 'Song Name',
  //     message : " Enter a name for this new song",
  //     imputs : [
  //       {
  //       name: 'title',
  //       placeholder: 'Title'
  //     },
  //   ],
  //   buttons:[
  //     {text : 'Cancel',
  //      handler: data => {
  //        console.log('cancel clicked');
  //      }
  //   },
  //   {
  //     text : 'save',
  //     handler : data => {
  //       const newSongRef = this.songs.push({});
  //
  //         newSongRef.set({
  //           id: newSongRef.apiKey,
  //           title: data.title
  //         });
  //     }
  //   }
  //   ]
  // });
  // prompt.present();
  // }
}
