//modules or packages
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';
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

//providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
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
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
