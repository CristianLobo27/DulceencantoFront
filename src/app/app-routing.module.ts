import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: 'dulceencanto',
    loadChildren: () => import('./dulceencanto/dulceencanto.module').then( m => m.DulceencantoModule)
  },
  {
    path:'**',
    redirectTo: '404'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
