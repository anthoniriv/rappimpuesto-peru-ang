import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'calc-precio',
    loadChildren: () => import('./calculadoras/calc-precio/calc-precio.module').then( m => m.CalcPrecioPageModule)
  },
  {
    path: 'calc-rentabilidad',
    loadChildren: () => import('./calculadoras/calc-rentabilidad/calc-rentabilidad.module').then( m => m.CalcRentabilidadPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
