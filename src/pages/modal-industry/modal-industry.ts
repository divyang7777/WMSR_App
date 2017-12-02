import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from "../../providers/database/database";
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-modal-industry',
  templateUrl: 'modal-industry.html',
})
export class ModalIndustryPage {
  
  type: any;
  summary: any;
  name: any;
  members: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public DatabaseProvider: DatabaseProvider,
    public toastCtrl: ToastController) {
  }

  

  savefactory(){
    
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
