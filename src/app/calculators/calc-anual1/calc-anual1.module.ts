import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcAnual1PageRoutingModule } from './calc-anual1-routing.module';

import { CalcAnual1Page } from './calc-anual1.page';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcAnual1PageRoutingModule,
    MaskitoDirective,
  ],
  declarations: [CalcAnual1Page],
})
export class CalcAnual1PageModule {}
