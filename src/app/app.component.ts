//modules or packages
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase, { Unsubscribe } from "firebase";
import { FIREBASE_CONFIG } from './app.firebase.config';
//pages
import { HomePage } from '../pages/home/home';
import { MyLomPage } from '../pages/my-lom/my-lom';
import { BusinessPage } from '../pages/business/business';
import { LoginPage } from '../pages/login/login';
import { AboutDevelopers } from '../pages/about-developers/about-developers';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
// import { ListPage } from '../pages/list/list';
// import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

//providers
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any  ;
  // rootPage : any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, public authProvider: AuthProvider) {
    this.initializeApp();

    firebase.initializeApp(FIREBASE_CONFIG);
    const unsubscribe: Unsubscribe = firebase
    .auth()
    .onAuthStateChanged(user => {
      if(!user){
        this.rootPage = LoginPage;
        unsubscribe();
      }else {
        this.rootPage = TabsPage ;
        unsubscribe();
      }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: TabsPage},
      {title : 'My Lom', component : MyLomPage},
      {title : 'Business' ,component : BusinessPage},
      {title : 'Profile', component : ProfilePage},
      {title : 'About Developers', component: AboutDevelopers},
      
      // { title: 'List', component: ListPage },
      // { title: 'Hello Ionic', component : HelloIonicPage},
      // {title : 'contact', component: ContactPage},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openLogin(){
    this.nav.setRoot(LoginPage)
  }
}
