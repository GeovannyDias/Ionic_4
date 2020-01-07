import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-grade-modal',
  templateUrl: './grade-modal.page.html',
  styleUrls: ['./grade-modal.page.scss'],
})
export class GradeModalPage implements OnInit {
  
  @Input() data;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.data);
  }
  async closeModal(){
    const onCloseData: string = "Wrapeed Up!";
    await this.modalCtrl.dismiss(onCloseData);
  }



}
