import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcRentabilidadPageRoutingModule } from './calc-rentabilidad-routing.module';

import { CalcRentabilidadPage } from './calc-rentabilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcRentabilidadPageRoutingModule
  ],
  declarations: [CalcRentabilidadPage]
})
export class CalcRentabilidadPageModule {}
