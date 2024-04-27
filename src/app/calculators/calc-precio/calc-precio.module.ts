import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcPrecioPageRoutingModule } from './calc-precio-routing.module';

import { CalcPrecioPage } from './calc-precio.page';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcPrecioPageRoutingModule,
    MaskitoDirective,
  ],
  declarations: [CalcPrecioPage],
})
export class CalcPrecioPageModule {}
