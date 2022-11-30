import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  exports: [
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  declarations: [
  ]
})
export class ComunesModule { }
