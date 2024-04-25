import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcCuartaPageRoutingModule } from './calc-cuarta-routing.module';

import { CalcCuartaPage } from './calc-cuarta.page';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcCuartaPageRoutingModule,
    MaskitoDirective,
  ],
  declarations: [CalcCuartaPage],
})
export class CalcCuartaPageModule {}
