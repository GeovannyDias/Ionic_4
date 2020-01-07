import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradeModalPageRoutingModule } from './grade-modal-routing.module';

import { GradeModalPage } from './grade-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradeModalPageRoutingModule
  ],
  declarations: [GradeModalPage]
})
export class GradeModalPageModule {}
