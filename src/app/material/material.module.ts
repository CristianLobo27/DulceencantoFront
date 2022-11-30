import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  exports: [
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule
  ]
})
export class MaterialModule { }
