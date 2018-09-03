import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HotelsPage } from '../hotels/hotels';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  errmessg
  public user:User = new User();
  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {

  }

login(){
    if(this.user.email !=null  && this.user.password !=null){
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  
this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      ).then(()=>{this.navCtrl.setRoot(HotelsPage)},
      Error =>{
        this.errmessg = Error.message;
    
        const alert = this.alertCtrl.create({
          title: 'warning!',
          subTitle:  this.errmessg ,
          buttons: ['OK']
        });
        alert.present();
    
      })
    }else{
      const alert = this.alertCtrl.create({
        title: 'warning!',
        subTitle:  'Please fill the details' ,
        buttons: ['OK']
      });
      alert.present();
    }
      

  }

  create(){
    this.navCtrl.push(RegisterPage);
}
}
export class User {
  email: string;
  password: string;
}