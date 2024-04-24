import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcRentabilidadPageRoutingModule } from './calc-rentabilidad-routing.module';

import { CalcRentabilidadPage } from './calc-rentabilidad.page';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcRentabilidadPageRoutingModule,
    MaskitoDirective
  ],
  declarations: [CalcRentabilidadPage]
})
export class CalcRentabilidadPageModule {}
