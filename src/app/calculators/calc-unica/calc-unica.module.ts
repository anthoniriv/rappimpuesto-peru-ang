import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcUnicaPageRoutingModule } from './calc-unica-routing.module';

import { CalcUnicaPage } from './calc-unica.page';

import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcUnicaPageRoutingModule,
    MaskitoDirective,
  ],
  declarations: [CalcUnicaPage],
})
export class CalcUnicaPageModule {}
