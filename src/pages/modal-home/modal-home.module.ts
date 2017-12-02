import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalHomePage } from './modal-home';

@NgModule({
  declarations: [
    ModalHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalHomePage),
  ],
})
export class ModalHomePageModule {}
