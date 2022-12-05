import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DulceencantoModule } from './dulceencanto/dulceencanto.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { CabeceraComponent } from './dulceencanto/comunes/cabecera/cabecera.component';
import { ComunesModule } from './dulceencanto/comunes/comunes.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ApartamentosComponent } from './dulceencanto/pages/apartamentos/apartamentos.component';






@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ApartamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DulceencantoModule,
    HttpClientModule,
    ComunesModule,
    MatTabsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
