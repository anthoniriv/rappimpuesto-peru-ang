import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CronogramaPageRoutingModule } from './cronograma-routing.module';

import { CronogramaPage } from './cronograma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CronogramaPageRoutingModule
  ],
  declarations: [CronogramaPage]
})
export class CronogramaPageModule {}
