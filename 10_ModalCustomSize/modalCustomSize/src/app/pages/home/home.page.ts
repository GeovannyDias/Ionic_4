import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GradeModalPage } from '../grade-modal/grade-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

   //===========================================================================
  // MODAL
  //===========================================================================
  async openModalGrade() {
    const modal = await this.modalCtrl.create({
      mode: 'ios',
      animated: true,
      component: GradeModalPage,
      cssClass: 'dialog-modal',
      backdropDismiss: false, // No permite cerrar el modal presionando sus alrededores
      componentProps: {
        data: 'data'
      }
    });
    await modal.present();
  }





}
