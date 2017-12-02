import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DatabaseProvider } from "../../providers/database/database";

@IonicPage()
@Component({
  selector: 'page-modal-home',
  templateUrl: 'modal-home.html',
})
export class ModalHomePage {

  area: any;
  summary: any;
  name: any;
  members: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public DatabaseProvider: DatabaseProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalHomePage');
  }

  savemember(){

    const text = { 
      'members': this.members, 
      'name':  this.name,
      'summary': this.summary,
      // 'userid': this.userid, 
      'area': this.area };
      
      this.DatabaseProvider.addHome(text)
      .then(data => {
          console.log(data);
        }, (err) => {
          console.log(err);
        });
        this.navCtrl.setRoot(HomePage); 
     
  
  }

}
