import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalHomePage } from '../modal-home/modal-home';
import { ModalIndustryPage } from '../modal-industry/modal-industry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  GetModalHome(){
    let modal = this.modalCtrl.create(ModalHomePage);
    modal.present();
  }

  GetModalIndustry(){
    let modal = this.modalCtrl.create(ModalIndustryPage);
    modal.present();
  }

}
