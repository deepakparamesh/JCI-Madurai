//modules or packages
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { }

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

//providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
  apiKey: "AIzaSyDrOcq3AmlXwnhmQNedtt8OFG7XZxQx9_g",
   authDomain: "fir-learn-b0877.firebaseapp.com",
   databaseURL: "https://fir-learn-b0877.firebaseio.com",
   projectId: "fir-learn-b0877",
   storageBucket: "fir-learn-b0877.appspot.com",
   messagingSenderId: "400708869257"
}

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
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
