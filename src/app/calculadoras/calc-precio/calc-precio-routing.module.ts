import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcPrecioPage } from './calc-precio.page';

const routes: Routes = [
  {
    path: '',
    component: CalcPrecioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcPrecioPageRoutingModule {}
