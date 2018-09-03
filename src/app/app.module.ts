import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HotelsPage } from '../pages/hotels/hotels';
import { RegisterPage } from '../pages/register/register';
import { BookingPage } from '../pages/booking/booking';
import { ConfirmPage } from '../pages/confirm/confirm';
import { fireKey } from './fire';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HotelsPage,
    RegisterPage,
    BookingPage,
    ConfirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireKey),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HotelsPage,
    RegisterPage,
    BookingPage,
    ConfirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
