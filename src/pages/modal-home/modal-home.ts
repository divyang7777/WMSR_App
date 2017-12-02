import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DatabaseProvider } from "../../providers/database/database";
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

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
    public DatabaseProvider: DatabaseProvider,
    public toastCtrl: ToastController
  ) 
  {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalHomePage');
  }

  savemember(){

  }

  showToast(){
    let toast = this.toastCtrl
    .create({
      message: 'Your Water is on the way, Stay tunned !!!',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
   }
   
}
