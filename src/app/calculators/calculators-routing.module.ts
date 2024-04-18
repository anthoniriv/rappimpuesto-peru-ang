import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorsPage } from './calculators.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorsPageRoutingModule {}
