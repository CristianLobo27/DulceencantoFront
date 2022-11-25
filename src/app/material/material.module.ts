import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  exports: [
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    FlexLayoutModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
