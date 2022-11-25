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



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DulceencantoModule,
    HttpClientModule,
    ComunesModule,
    MatTabsModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
