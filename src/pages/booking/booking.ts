import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HotelsPage } from '../hotels/hotels';
import { ConfirmPage } from '../confirm/confirm';
import { LoadingController } from 'ionic-angular';
declare var firebase
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

// img
// arrayPic
// i
// picture
  arr = new Array();
  userid = this.navParams.get('userIdentification');
pic = this.navParams.get('pic');
pr = this.navParams.get('pr');

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public loadingCtrl: LoadingController) {

    // alert(this.navParams.get('userIdentification'));
 alert(this.navParams.get('pr'));
  
  }


  ionViewDidLoad() {
    // console.log('ionViewDidLoad BookingPage');
  }
  Booking(name,surname,num,roomNo,room,dateIn,dateOut){
  
    firebase.database().ref('hoteldb/').push({
      Name:name,
      Surname:surname,
      Number:num,
      RoomNum:roomNo,
      Room:room,
      DateIn:dateIn,
      DateOut:dateOut,
      picture : this.navParams.get('pic'),
      price:this.navParams.get('pr'),

    });
    


    const loader = this.loadingCtrl.create({
      content: "Please while processing...",
      duration: 1000
    });
    loader.present();
    this.navCtrl.setRoot(ConfirmPage);
  }


  back1(){
    this.navCtrl.push(HotelsPage);
  }
  Back5(){
    this.navCtrl.push(HotelsPage);
  }
  
}
