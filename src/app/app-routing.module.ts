import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'calc-precio',
    loadChildren: () => import('./calculators/calc-precio/calc-precio.module').then( m => m.CalcPrecioPageModule)
  },
  {
    path: 'calc-rentabilidad',
    loadChildren: () => import('./calculators/calc-rentabilidad/calc-rentabilidad.module').then( m => m.CalcRentabilidadPageModule)
  },
  {
    path: 'calc-unica',
    loadChildren: () => import('./calculators/calc-unica/calc-unica.module').then( m => m.CalcUnicaPageModule)
  },
  {
    path: 'calc-anual1',
    loadChildren: () => import('./calculators/calc-anual1/calc-anual1.module').then( m => m.CalcAnual1PageModule)
  },
  {
    path: 'calc-anual2',
    loadChildren: () => import('./calculators/calc-anual2/calc-anual2.module').then( m => m.CalcAnual2PageModule)
  },
  {
    path: 'calc-cuarta',
    loadChildren: () => import('./calculators/calc-cuarta/calc-cuarta.module').then( m => m.CalcCuartaPageModule)
  },
  {
    path: 'calculators',
    loadChildren: () => import('./calculators/calculators.module').then( m => m.CalculatorsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
