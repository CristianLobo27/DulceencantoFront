import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocinaComponent } from './pages/cocina/cocina.component';
import { NogalComponent } from './pages/nogal/nogal.component';
import { AlmendroComponent } from './pages/almendro/almendro.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { ApartamentosComponent } from './pages/apartamentos/apartamentos.component';

const routes: Routes=[
  {
    path:'',
    children:[
      {
        path: 'cocina',
        component: CocinaComponent
      },
      {
        path: 'nogal',
        component: NogalComponent
      },
      {
        path: 'almendro',
        component: AlmendroComponent
      },
      {
        path: 'actividades',
        component: ActividadesComponent
      },
      {
        path: 'apartamentos',
        component: ApartamentosComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DulceencantoRoutingModule { }
