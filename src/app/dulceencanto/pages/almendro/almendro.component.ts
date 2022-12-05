import { Component, OnInit } from '@angular/core';
import { Almendro } from '../../../models/almendro';
import { AlmendroService } from '../../../services/AlmendroService/almendro.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAlmendroComponent } from './modal-almendro/modal-almendro.component';

@Component({
  selector: 'app-almendro',
  templateUrl: './almendro.component.html',
  styleUrls: ['./almendro.component.css']
})
export class AlmendroComponent implements OnInit {

  public almendro: Almendro[] = [];
  public selected!: Date;

  constructor(private almendroService: AlmendroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAlmendro();
  }

  public getAlmendro(): void{
    this.almendroService.getAlmendro().subscribe(
      (response: Almendro[])=> {
        this.almendro=response;
      })
    
  }

  openDialog(cocina:Almendro) {
    const dialogRef = this.dialog.open(ModalAlmendroComponent,{ 
      data: {...cocina}
    });

    dialogRef.afterClosed().subscribe((result: String)=> {
      console.log(`Dialog result: ${result}`);
    });
  }

}
