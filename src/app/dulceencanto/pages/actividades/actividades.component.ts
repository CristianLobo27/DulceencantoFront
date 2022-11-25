import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../../../services/ActividadesService/actividades.service';
import { Actividades } from '../../../models/actividades';
import { ModalComponent } from './modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  public actividades: Actividades[] = [];

  constructor(private actividadesService: ActividadesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getActividades();
  }

  public getActividades(): void{
    this.actividadesService.getActividades().subscribe(
      (response: Actividades[])=> {
        this.actividades=response;
      })
    
  }

  openDialog(cocina:Actividades) {
    const dialogRef = this.dialog.open(ModalComponent,{ 
      data: {...cocina}
    });

    dialogRef.afterClosed().subscribe((result: String)=> {
      console.log(`Dialog result: ${result}`);
    });
  }

}
