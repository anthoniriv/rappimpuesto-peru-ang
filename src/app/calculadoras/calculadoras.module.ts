import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculadorasPage } from './calculadoras.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CalculadorasRoutingModule } from './calculadoras-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CalculadorasRoutingModule
  ],
  declarations: [CalculadorasPage]
})
export class Tab1PageModule {}
