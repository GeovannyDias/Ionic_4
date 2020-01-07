import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { GradeModalPage } from '../grade-modal/grade-modal.page';
import { GradeModalPageModule } from '../grade-modal/grade-modal.module';

@NgModule({
  entryComponents: [
    GradeModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradeModalPageModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
