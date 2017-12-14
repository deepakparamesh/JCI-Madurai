import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // template: `
  // <ion-header>
  //   <ion-navbar>
  //     <ion-title>Tabs</ion-title>
  //   </ion-navbar>
  // </ion-header>
  // <ion-content></ion-content>
  // `
})

// class TabsTextContentPage {
//   constructor() {}
// }
//
// @Component({
//   template: `
//   <ion-tabs>
//     <ion-tab tabIcon="water" tabTitle="Water" [root]="tab1"></ion-tab>
//     <ion-tab tabIcon="leaf" tabTitle="Life" [root]="tab2"></ion-tab>
//     <ion-tab tabIcon="flame" tabTitle="Fire" [root]="tab3"></ion-tab>
//     <ion-tab tabIcon="magnet" tabTitle="Force" [root]="tab4"></ion-tab>
//   </ion-tabs>`
// })

export class HomePage {

  constructor(public navCtrl: NavController) {
    // this.tab1 = TabsTextContentPage;
    // this.tab2 = TabsTextContentPage;
    // this.tab3 = TabsTextContentPage;
    // this.tab4 = TabsTextContentPage;
  }

}
