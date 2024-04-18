import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadorasPage } from './calculadoras.page';
import { CalcRentabilidadPage } from './calc-rentabilidad/calc-rentabilidad.page';
import { CalcPrecioPage } from './calc-precio/calc-precio.page';
import { CalcAnual1Page } from './calc-anual1/calc-anual1.page';
import { CalcAnual2Page } from './calc-anual2/calc-anual2.page';
import { CalcCuartaPage } from './calc-cuarta/calc-cuarta.page';
import { CalcUnicaPage } from './calc-unica/calc-unica.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadorasPage
  },
  {
    path: 'calc-unic',
    component: CalcUnicaPage
  },
  {
    path: 'calc-anual1',
    component: CalcAnual1Page
  },
  {
    path: 'calc-anual2',
    component: CalcAnual2Page
  },
  {
    path: 'calc-cuarta',
    component:CalcCuartaPage
  },
  {
    path: 'calc-rentabilidad',
    component: CalcRentabilidadPage
  },
  {
    path: 'calc-precio',
    component:CalcPrecioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadorasRoutingModule {}
