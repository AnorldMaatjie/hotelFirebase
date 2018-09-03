import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { ConfirmPage } from '../confirm/confirm';


/**
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',
})
export class HotelsPage {


  arrayPic= [new HotelsInfor("../../assets/imgs/b1.jpg", "King Shaka","This rooms are on floors 4 through to 6 floors of the hotel. They are on level and consist of bedroom with small seating are."),
      new HotelsInfor("../../assets/imgs/s2.jpg", " Queen Shaka","The hotel has 2 presidential suites both of which overlook the square. The suites both feature king beds and a deluxe room twin bedded room."),
      new HotelsInfor("../../assets/imgs/s5.jpg", "Samba","The luxurious executive Suites, feature an open plan design and guests can choose between a king size bed or twin beds."),
      new HotelsInfor("../../assets/imgs/s4.jpg", "Rock Pride ","The Premier Suites are located on floors 1 through 6 at end of the North facing section of the hotel they have separate seating areas."),
      new HotelsInfor("../../assets/imgs/s6.jpg", "Pride View","The Deluxe Rooms have a step down into a small seating area and they on floors 1 through 3 of the hotel. "),
]
pric=[1300,2500,800,1000,9000]
pics = ["../../assets/imgs/b1.jpg", "../../assets/imgs/s2.jpg","../../assets/imgs/s5.jpg","../../assets/imgs/s4.jpg","../../assets/imgs/s6.jpg"]
  constructor(public navCtrl: NavController, public navParams: NavParams,public fAuth: AngularFireAuth,public alertCtrl: AlertController) {
 
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelsPage');
  }
  View(){
    this.navCtrl.push(ConfirmPage);
  }

  bookIn(i){
 
    this.navCtrl.push(BookingPage, {pic:this.pics[i],pr:this.pric[i]});
  }

  logout() {


    const confirm = this.alertCtrl.create({
      title: 'Logout?',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.fAuth.auth.signOut();
            this.navCtrl.setRoot(HomePage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
export class HotelsInfor{
  picture;
  name;
  desctiption;
  pic1;
  pic2;
  pic3;
  pic4; 

  constructor(picture,name,desctiption) {
    this.picture=picture;
    this.name=name;
    this.desctiption=desctiption;
    

    
  }
}