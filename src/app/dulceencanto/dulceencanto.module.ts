import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocinaComponent } from './pages/cocina/cocina.component';
import { NogalComponent } from './pages/nogal/nogal.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { AlmendroComponent } from './pages/almendro/almendro.component';
import { DulceencantoRoutingModule } from './dulceencanto-routing.module';
import { MaterialModule } from '../material/material.module';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalComponent } from './pages/cocina/modal/modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ApartamentosComponent } from './pages/apartamentos/apartamentos.component'
import { ComunesModule } from './comunes/comunes.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    CocinaComponent,
    NogalComponent,
    ActividadesComponent,
    AlmendroComponent,
    ModalComponent,
    ApartamentosComponent
  ],
  imports: [
    CommonModule,
    DulceencantoRoutingModule,
    MaterialModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule
    //BrowserAnimationsModule

  ]
})
export class DulceencantoModule { }
