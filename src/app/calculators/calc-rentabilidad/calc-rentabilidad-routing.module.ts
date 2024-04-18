import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcRentabilidadPage } from './calc-rentabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: CalcRentabilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcRentabilidadPageRoutingModule {}
