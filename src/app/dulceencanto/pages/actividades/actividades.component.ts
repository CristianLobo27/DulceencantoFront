import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../../../services/ActividadesService/actividades.service';
import { Actividades } from '../../../models/actividades';
import { MatDialog } from '@angular/material/dialog';
import { ModalActividadesComponent } from './modal-actividades/modal-actividades.component';

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
    const dialogRef = this.dialog.open(ModalActividadesComponent,{ 
      data: {...cocina}
    });

    dialogRef.afterClosed().subscribe((result: String)=> {
      console.log(`Dialog result: ${result}`);
    });
  }

}
