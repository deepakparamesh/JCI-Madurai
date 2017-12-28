//modules or packages
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';

//firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';
// import * as firebase from "firebase";

//components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyLomPage } from '../pages/my-lom/my-lom';
import { BusinessPage } from '../pages/business/business';
import { LoginPage } from '../pages/login/login';
import { AboutDevelopers } from '../pages/about-developers/about-developers';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { EventsPage } from '../pages/events/events';
import { CreateProfilePage } from '../pages/create-profile/create-profile';

//providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth'; 
import { ProfileProvider } from '../providers/profile/profile';
import { EventsProvider } from '../providers/events/events';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyLomPage,
    BusinessPage,
    LoginPage,
    AboutDevelopers,
    TabsPage,
    ContactPage,
    SignUpPage,
    AboutPage,
    ProfilePage,
    EventsPage,
    CreateProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyLomPage,
    BusinessPage,
    LoginPage,
    AboutDevelopers,
    TabsPage,
    ContactPage,
    SignUpPage,
    AboutPage, 
    ProfilePage,
    EventsPage,
    CreateProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    ProfileProvider,
    EventsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
