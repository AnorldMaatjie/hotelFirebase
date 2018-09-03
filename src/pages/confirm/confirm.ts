import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HotelsPage } from '../hotels/hotels';

declare var firebase;
/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  // img
  bookingArr = new Array();
  userid = this.navParams.get('userIdentification');
// image
// i
// arrayPic


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.bookingArr = [];
    // this.image= this.arrayPic[this.i].picture;
    // this.img= this.navParams.get('image')
    
    firebase.database().ref('hoteldb').on('value', (data: any) => {

      var name = data.val();
      // console.log(name);

      var keys: any = Object.keys(name);

      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];

        let obj = {
          item: name[k].Name,
          item2: name[k].Surname,
          item3:name[k].Number,
          item4:name[k].RoomNum,
          item5:name[k].Room,
          item6:name[k].picture,
          item7:name[k].price,
          key: k
        }
        this.bookingArr.push(obj);
        // console.log(this.arrayPic);
        console.log(this.bookingArr);
      };
  })
  
  }

  Del(v){
    this.bookingArr = [];
    firebase.database().ref('hoteldb/').child(v).remove();
  }
  back3(){
    this.navCtrl.push(HotelsPage);
  }
  update(u){
 
    for(let index = 0; index < this.bookingArr.length; index++){
      var Name = this.bookingArr[index].Name;
      var Surname = this.bookingArr[index].Surname;
      var Number = this.bookingArr[index].Number;
      var RoomNum = this.bookingArr[index].RoomNum;
   
 
  }
 
  let alert = this.alertCtrl.create({
    title: 'Update',
    inputs: [
      {
        name: 'Name',
        placeholder: 'Name',
      },
      {
        name: 'Surname',
        placeholder: 'Surname',
 
      },
      {
        name: 'Number',
        placeholder: 'Guset Number',
      },
      {
        name: 'RoomNum',
        placeholder: 'Number of Romms',
      },
 
  
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          // console.log('Cancel clicked');
        }
      },
      {
        text: 'Update',
        handler: data => {
        this.bookingArr = [];
 
        var updates = { Name:data.Name,Surname:data.Surname,Number:data.Number,RoomNum:data.RoomNum};
        firebase.database().ref('hoteldb/').child(u).update(updates);
        // console.log('update clicked'+ data.RoomNum);
        // console.log(data.RoomNum);
        }
      }
    ]
  });
  alert.present();
  }

}
