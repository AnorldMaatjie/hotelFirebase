import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { HotelsPage } from '../hotels/hotels';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
errmessg;
   public user:User = new User();
  constructor(public navCtrl: NavController, public navParams: NavParams,public fAuth:AngularFireAuth,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  back3(){
    this.navCtrl.push(HomePage);
  }

 create(){

    const loader = this.loadingCtrl.create({
      content: "Please wait While create account!",
      duration: 1000
    });
    this.fAuth.auth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
      
    ).then(()=>{this.navCtrl.push(HotelsPage)},
  Error =>{
    this.errmessg = Error.message;

    const alert = this.alertCtrl.create({
      title: 'warning!',
      subTitle:  this.errmessg ,
      buttons: ['OK']
    });
    alert.present();

  })
 }
   
} 


export class User {
  email: string;
  password: string;
}
